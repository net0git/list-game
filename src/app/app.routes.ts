import { Routes } from '@angular/router';
import { ListGameComponent } from './infrastructure/page/list-game/list-game.component';

export const routes: Routes = [
    {
        path:"principal",
        component: ListGameComponent
    },
    {
        path: '**', // Ruta comodín
        component: ListGameComponent, // Muestra una página de "404 - Not Found"
      }

];
