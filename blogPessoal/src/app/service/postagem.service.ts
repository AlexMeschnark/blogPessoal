import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http : HttpClient) { }

  token =
   {
     headers : new HttpHeaders().set('Authorization', localStorage.getItem('token'))
   }

   getAllPostagens()
   {
     return this.http.get('htttp://localhost:8080/postagens', this.token)
   }

   getByIdPostagem(id:number)
  {
    return this.http.get('htttp://localhost:8080/postagens/${id}', this.token)
  }

   postPostagem(postagem : Postagem)
   {
     return this.http.post('htttp://localhost:8080/postagens', postagem, this.token)
   }

   putPostagem(postagem : Postagem)
   {
     return this.http.put('htttp://localhost:8080/postagens', postagem, this.token)
   }

   deletePostagem(id: number)
   {
    return this.http.delete('htttp://localhost:8080/postagens/${id}', this.token) 
   }
}
