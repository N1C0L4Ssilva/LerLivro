import { Routes } from '@angular/router';
import {LENDOComponent} from "./lendo/lendo.component"
import {LISTAComponent} from "./lista/lista.component"

export const routes: Routes = [
    {path:"", component:LISTAComponent},
    {path:"Ler", component:LENDOComponent}, 
];
