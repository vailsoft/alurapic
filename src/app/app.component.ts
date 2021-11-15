import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    photos = [
      {
        url: "../assets/images/kratos.jpg",
        description: "Kratos"
      },
      {
        url: "../assets/images/atreus.jpg",
        description: "Atreus"
      },{
        url: "../assets/images/freya.jpg",
        description: "Freya"
      },
      {
        url: "../assets/images/thor.jpg",
        description: "Thor"
      }

    ];
}
