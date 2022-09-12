import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponentComponent,
    FruitsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
