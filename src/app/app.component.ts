import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  photos: any;
  erro: any;
  user: string = 'flavio';

  constructor(private photoService: PhotoService){
    this.getter();
  }

  ngOnInit(){}
  
  public getter(){
    this.photoService.listFromUser(this.user).subscribe(
      (data: any): void => {
        this.photos = data;
      }, (error: any) =>{
        this.erro = error;
        console.log(this.erro)
    });
  }

}
