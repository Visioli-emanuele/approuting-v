import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';

const routes: Routes = [
    { path: 'animals', component: AnimalsComponentComponent},
    { path: 'fruits', component: FruitsComponentComponent},
  ]; //<- Qui vanno inserite tutte le route che desideriamo creare

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
