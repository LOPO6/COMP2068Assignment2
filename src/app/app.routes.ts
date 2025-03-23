import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
export const routes: Routes = [

    {path: 'list', component: ListComponent},
    {path: '', component: HomeComponent},
    {path: 'add', component: AddComponent}
];
