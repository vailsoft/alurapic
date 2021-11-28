import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any;
  erro: any;
  user: string = 'flavio';

  constructor(private photoService: PhotoService){ }

  ngOnInit(): void{
    this.photoService.listFromUser(this.user).subscribe(
      (data: any): void => {
        this.photos = data;
      }, (error: any) =>{
        this.erro = error;
        console.log(this.erro)
    });
  }

}
