import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
  personajes: any[] = [];
  personajeEncontrado: any = null;
  pbusqueda: string= '';
  verPersonajes: boolean = false;


  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
      this.ApiService.getPersonajes().subscribe(data =>{
        this.personajes = data;
        //this.personajesFiltrados = data;
      });
  }

    mostrarPersonajes() {
      this.verPersonajes = !this.verPersonajes;
      if (this.verPersonajes){
        this.personajeEncontrado= null;
      }
    };

    mostrarPersonaje() {
    // Buscar el personaje según la búsqueda
    const nombrebusqueda = this.pbusqueda.toLowerCase().trim();
    //this.personajeEncontrado = this.personajes.find(p => p.fullName.toLowerCase().includes(nombrebusqueda));
    if(!nombrebusqueda){
      this.personajeEncontrado = null;
      this.verPersonajes= false;
    } else {
      const enconotrado=  this.personajes.find(p => p.fullName.toLowerCase().includes(nombrebusqueda));

      if(enconotrado){
        this.personajeEncontrado = enconotrado;
        this.verPersonajes = false;
      } else {
        this.personajeEncontrado = null;
        this.verPersonajes = false;
      }
      }
    }

}






