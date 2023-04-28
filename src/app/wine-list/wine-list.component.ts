import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  constructor(private _wineService: WineService) {}

  wines: any[] = [];

  ngOnInit() {
    this._wineService.getWines().subscribe((data) => {
      this.wines = [];
      data.forEach((element: any) => {
        // acceder a los id de la base
        // console.log(element.payload.doc.id);
        // acceder a la informacion
        // console.log(element.payload.doc.data());

        // objeto con id e informacion
        this.wines.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      console.log(this.wines);
    });
  }
}
