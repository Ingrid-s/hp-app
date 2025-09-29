import { Component, OnInit } from '@angular/core';
import { HechizosService } from './../../services/hechizos.service';

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrls: ['./hechizos.component.css']
})
export class HechizosComponent implements OnInit {

  hechizos: any[] = [];
  paginaActual: number = 1;
  registrosPorPagina: number = 10;
  totalPaginas: number[] = [];

  constructor(private hechizosService: HechizosService) { }

  ngOnInit() {
    this.hechizosService.getHechizos().subscribe(data => {
      this.hechizos = data;
      this.calcularPaginas();
    });
  }

  calcularPaginas() {
    const totalRegistros = this.hechizos.length;
    const totalPag = Math.ceil(totalRegistros / this.registrosPorPagina);
    this.totalPaginas = Array.from({length: totalPag}, (_, i) => i + 1);
  }

  get pagedHechizos() {
    const start = (this.paginaActual - 1) * this.registrosPorPagina;
    const end = start + this.registrosPorPagina;
    return this.hechizos.slice(start, end);
  }

  cambiarPagina(pagina: number, event: Event) {
    event.preventDefault();
    this.paginaActual = pagina;
  }

  siguiente(event: Event) {
    event.preventDefault();
    if (this.paginaActual < this.totalPaginas.length) {
      this.paginaActual++;
    }
  }

  anterior(event: Event) {
    event.preventDefault();
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
}
