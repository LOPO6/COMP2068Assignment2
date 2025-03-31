import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShoeService } from '../../services/shoe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Shoe',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './shoe.component.html'
})

export class ShoeComponent {
  SHOES: any;
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer?: {
    name: string | undefined;
    foundingYear: number | undefined;
  };
  constructor(private service: ShoeService) {}

  ngOnInit() {
    //this.getShoes
  }
}
