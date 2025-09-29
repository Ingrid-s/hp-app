import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros: any[] = [];


  constructor(private LibrosService: LibrosService) {}

  ngOnInit(): void {
      this.LibrosService.getLibros().subscribe(data =>{
        console.log(data);
        this.libros = data;

      });
  }
}
