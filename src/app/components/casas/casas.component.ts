import { CasasService } from './../../services/casas.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent {
  casas: any[] = [];


  constructor(private CasasService: CasasService) {}

  ngOnInit(): void {
      this.CasasService.getCasas().subscribe(data =>{
        console.log(data);
        this.casas = data;

      });
  }
}
