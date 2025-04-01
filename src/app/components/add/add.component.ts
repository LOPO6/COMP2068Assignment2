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
  selector: 'app-add',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  SHOES: any;
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer?: {
    name: string | undefined;
    foundingYear: number | undefined;
  };
  constructor(private service: ShoeService){}

  addShoe(): void{
    let newShoe = {
      name: this.name,
      price: this.price,
      category: this.category,
      manufacturer: this.manufacturer

    };
    this.service.addShoe(newShoe).subscribe(response =>{
      this.resetForm();
    });
  }

  resetForm(): void{
    this.name = undefined;
    this.price = undefined;
    this.category = undefined;
    this.manufacturer = undefined;
  }

}
