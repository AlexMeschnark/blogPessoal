import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http : HttpClient) { }

  token =
   {
     headers : new HttpHeaders().set('Authorization', localStorage.getItem('token'))
   }

  getAllTemas()
  {
    return this.http.get('htttp://localhost:8080/temas', this.token)
  }

  getByIdTema(id:number)
  {
    return this.http.get('htttp://localhost:8080/temas/${id}', this.token)
  }

  postTema(tema : Tema)
  {
    return this.http.post('htttp://localhost:8080/temas', tema, this.token)
  }
}
