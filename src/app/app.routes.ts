import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ShoeComponent } from './components/shoe/shoe.component';
export const routes: Routes = [

    {path: 'shoe', component: ShoeComponent},
    {path: '', component: HomeComponent},
    {path: 'add', component: AddComponent}
];
