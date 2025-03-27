import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ShoeService } from '../../services/shoe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class Shoe{
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;


  manufacturer?: {
    name: string | undefined;
    foundingYear: number | undefined;
  };
  
}

@Component({
  selector: 'app-Shoe',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit{
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
