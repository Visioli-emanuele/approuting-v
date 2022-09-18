import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GenericComponent } from './generic/generic.component';


const routes: Routes = [
  { path: 'animals', component: AnimalComponent},
  { path: 'fruits', component: FruitsComponent}, //<- Qui vanno inserite tutte le route che desideriamo creare
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: GenericComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }