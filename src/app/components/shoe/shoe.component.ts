import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShoeService } from '../../services/shoe.service';
import { FormsModule } from '@angular/forms';

export class Shoe {
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer?: {
    name: string | undefined;
    foundingYear: number | undefined;

  }
}



@Component({
  selector: 'app-Shoe',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './.component.html'
})



export class ShoeComponent implements OnInit {
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

  getShoes(): void{
    this.service.getShoes().subscribe(response=>{
      this.SHOES = response;
    })
  }
  ngOnInit() {
    this.getShoes();
    
  }
}
