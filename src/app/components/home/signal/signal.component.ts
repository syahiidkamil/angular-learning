import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Coffee {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CoffeeCart {
  id: number;
  name: string;
  price: number;
  stock: number;
  quantity: number;
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  quantity = signal<number>(1);
  selectedCoffee = signal<Coffee>(this.coffees[0]);
  numbers = [1, 2, 3, 4, 5];

  totalPrice = computed(() => {
    return this.quantity() * this.selectedCoffee().price
  })

  addCart(coffee: Coffee) {
    // Check stock
    if (coffee.stock == 0) {
      alert('Out of Stock');
      return
    }

    // Create new coffee
    let newCooffee = {...coffee, quantity: 1};


    // Check if already in cart
    if (this.cartCoffees.find(x => x.id == newCooffee.id)) {
      alert('Already in cart');
      return
    }

    // Add to cart
    this.cartCoffees.push(newCooffee);
  }

  changeQuantity(index: number, idCart: number, quantity: string) {
    this.cartCoffees[index].quantity = Number(quantity);
    // this.coffees[].stock = 0

    console.log(this.cartCoffees);
  }


  constructor() {
      
  }

  ngOnInit() {
    
  }

  buy() {

  }
  
}
