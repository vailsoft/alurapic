import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root' // deixa o serviço disponivel a todo mundo desde a raiz
})

export class PhotoService {

  constructor(private http: HttpClient) {

  }

  listFromUser(userName: string){
    return this.http.get(`${API}${userName}/photos`);
  }

  
}
