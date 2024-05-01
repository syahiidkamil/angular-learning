import { Component, computed, effect, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Coffee {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CoffeeCart extends Coffee {
  quantity: number;
  totalPrice: number;
  initialStock: number;
}


export interface User {
  id: number;
  name: string;
  carts: CoffeeCart[]
}


@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  coffees: Coffee[] = [
    {
      id: 1,
      name: "Cappuccino",
      price: 50000,
      stock: 10
    },
    {
      id: 2,
      name: "Espresso",
      price: 1000000,
      stock: 3
    },
    {
      id: 3,
      name: "Luwak",
      price: 5000,
      stock: 50
    },
    {
      id: 4,
      name: "Latte",
      price: 10000,
      stock: 0
    }
  ]

  cartCoffees: CoffeeCart[] = [];

  totalPrice: number = 0;

  addCart(indexCoffee: number, coffee: Coffee) {
    // Check stock
    if (coffee.stock == 0) {
      alert('Out of Stock');
      return
    }

    // Create new coffee
    let newCooffee = { ...coffee, quantity: 1, totalPrice: coffee.price, initialStock: coffee.stock };


    // Check if already in cart
    if (this.cartCoffees.find(x => x.id == newCooffee.id)) {
      alert('Already in cart');
      return
    }

    // Add to cart
    this.cartCoffees.push(newCooffee);

    // Reduce stock
    this.coffees[indexCoffee].stock -= 1

    // Calculate total
    this.totalPrice = this.cartCoffees.reduce((a, b) => a + b.totalPrice, 0)
  }

  changeQuantity(index: number, idCart: number, value: string) {
    let quantity = Number(value);

    // Check if quantity is below 1, then set to 1
    if (quantity < 1) {
      quantity = 1;
    }

    // Check if quantity is over stock, then set to stock amount
    let indexCoffee = this.coffees.findIndex(x => x.id == idCart);
    if (quantity > this.cartCoffees[index].initialStock) {
      quantity = this.cartCoffees[index].initialStock;
    }

    // Change quantity
    this.cartCoffees[index].quantity = quantity;
    this.cartCoffees[index].totalPrice = quantity * this.coffees[indexCoffee].price;
    this.coffees[indexCoffee].stock = this.cartCoffees[index].initialStock - quantity;

    // Calculate total
    this.totalPrice = this.cartCoffees.reduce((a, b) => a + b.totalPrice, 0)
  }

  removeCart(index: number, coffee: CoffeeCart) {
    // Remove from cart
    this.cartCoffees.splice(index, 1);
    // Increase stock
    this.coffees[coffee.id - 1].stock += coffee.quantity
  }

  constructor() {

  }

  ngOnInit() {

  }

}
