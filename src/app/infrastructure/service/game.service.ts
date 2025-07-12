import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

 url = 'https://docs.google.com/spreadsheets/d/1ywSOpFF-41Q2zzpfjUFH6-vxsmVN3uaL0pqal_ZpCm4/gviz/tq?tqx=out:json&gid=0';


   constructor(private http:HttpClient){}

   getSheetData(): Observable<string[][]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map((res) => {
        const json = JSON.parse(res.substring(47).slice(0, -2));
        const rows = json.table.rows;
        return rows.map((row: any) => row.c.map((cell: any) => cell?.v ?? ''));
      })
    );
  }
}
