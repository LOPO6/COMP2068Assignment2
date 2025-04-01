import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../services/shoe.service';
import { FormsModule } from '@angular/forms';

export class Shoe {
  _id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer: string | undefined;
  stores: {
    name: string;
    address: string;
    stock: number;
  }[] = [];
}

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  manufacturer: string | undefined;

  constructor(private service: ShoeService) {}

  ngOnInit(): void {}

  addShoe(): void {
    let newShoe = {
      name: this.name,
      price: this.price,
      category: this.category,
      manufacturer: this.manufacturer,
      stores: [] // No stores in this case as it's only for adding a shoe
    };

    this.service.addShoe(newShoe).subscribe(response => {
      this.resetForm();
    });
  }

  resetForm(): void {
    this.name = undefined;
    this.price = undefined;
    this.category = undefined;
    this.manufacturer = undefined;
  }
}
