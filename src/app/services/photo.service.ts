
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../photos/photo/photo';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root' // deixa o serviço disponivel a todo mundo desde a raiz
})

export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string){
    return this.http.get<Photo[]>(`${API}${userName}/photos`);
  }

  

  
}
