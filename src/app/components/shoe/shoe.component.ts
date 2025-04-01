import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShoeService } from '../../services/shoe.service';
import { FormsModule } from '@angular/forms';

export class Shoe {
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer: string | undefined;
  stores?: {  // Stores are still an array of objects
    name: string;
    address: string;
    stock: number;
  }[];

}



@Component({
  selector: 'app-Shoe',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './shoe.component.html',
  styleUrl: './shoe.component.css'
})

export class ShoeComponent implements OnInit {
  SHOES: any;
  MANUFACTURERS: any;
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer: string | undefined;
  stores:{
    name: string,
    address: string,
    stock: number
  }[] = [];

  


  showModal: boolean = false; //function for the modal that pops up when a user want's to edit something

  constructor(private service: ShoeService) {}

  ngOnInit(){
    this.getShoes();
  }

  getShoes(): void{
    this.service.getShoes().subscribe(response=>{
      this.SHOES = response;
    });
  }


  selectShoe(shoe: Shoe) {
    this._id = shoe._id;
    this.name = shoe.name;
    this.price = shoe.price;
    this.category = shoe.category;
    this.manufacturer = shoe.manufacturer;
    this.stores = shoe.stores ? shoe.stores : [];
    this.showModal = true;
  }
  resetForm(): void{
    this._id = undefined;
    this.name = undefined;
    this.price = undefined;
    this.category = undefined;
    this.manufacturer = undefined;
    this.stores = [];
    this.showModal = false;
  }

  deleteShoe(_id: string): void{
    if(confirm('Are you ABSOLUTELY sure you want to delete this shoe?')){
      this.service.deleteShoe(_id).subscribe(response => {
        this.getShoes();
      });
    }
  }

  updateShoe(): void{
    let shoe = {
      _id: this._id,
      name: this.name,
      price: this.price,
      category: this.category,
      manufacturer: this.manufacturer,
      stores: this.stores
    }
    this.service.updateShoe(shoe).subscribe(response => {
      this.getShoes();
      this.resetForm();
      this.showModal = false;
    })
  }
  closeModal(event: MouseEvent): void{
    if(event.target === event.currentTarget){
      this.showModal = false;
    }
  }

}


