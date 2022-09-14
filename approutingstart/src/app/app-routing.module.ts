import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponent},
  { path: 'fruits', component: FruitsComponent}]; //<- Qui vanno inserite tutte le route che desideriamo creare

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }