import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  private librosURL = 'https://potterapi-fedeperin.vercel.app/es/books';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.librosURL);

  }
}
