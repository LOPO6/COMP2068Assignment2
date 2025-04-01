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
  selectShoe(shoe: Shoe) {
    this._id = shoe._id;
    this.name = shoe.name;
    this.price = shoe.price;
    this.category = shoe.category;
    this.manufacturer = shoe.manufacturer;
  }
  resetForm(): void{
    this._id = undefined;
    this.name = undefined;
    this.price = undefined;
    this.category = undefined;
    this.manufacturer = undefined;
  }

  deleteShoe(_id: string): void{
    if(confirm('Are you ABSOLUTELY sure you want to delete this shoe?')){
      this.service.deleteShoe(_id).subscribe(response => {
        this.getShoes();
        this.resetForm();
      });
    }
  }

  updateShoe(): void{
    let shoe = {
      _id: this._id,
      name: this.name,
      price: this.price,
      category: this.category,
      manufacturer: this.manufacturer
    }
    this.service.updateShoe(shoe).subscribe(response => {
      this.getShoes();
      this.resetForm();
    })
  }

}


