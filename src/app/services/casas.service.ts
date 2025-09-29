import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CasasService {

  private casasURL = 'https://potterapi-fedeperin.vercel.app/es/houses';

  constructor(private http: HttpClient) { }

  getCasas(): Observable<any[]> {
    return this.http.get<any[]>(this.casasURL);

  }
}
