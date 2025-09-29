import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seccionActiva: string = 'personajes';

  mostrarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }
}
