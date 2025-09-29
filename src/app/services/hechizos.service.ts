import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HechizosService {

  private hechizosURL = 'https://potterapi-fedeperin.vercel.app/es/spells';

  constructor(private http: HttpClient) { }

  getHechizos(): Observable<any[]> {
    return this.http.get<any[]>(this.hechizosURL);

  }
}
