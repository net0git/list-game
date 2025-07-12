import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.css'
})
export class ListGameComponent implements OnInit{

  data: string[][] = [];

  constructor(private sheetService: GameService) {}

  ngOnInit() {
    this.sheetService.getSheetData().subscribe((rows) => {
      this.data = rows.slice(1);
      console.log(this.data)
    });
  }
}
