import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { LibrosComponent } from './components/libros/libros.component';
import { CasasComponent } from './components/casas/casas.component';
import { HechizosComponent } from './components/hechizos/hechizos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    LibrosComponent,
    CasasComponent,
    HechizosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
