import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignalComponent } from './signal.component';

describe('SignalComponent', () => {
  let component: SignalComponent;
  let fixture: ComponentFixture<SignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SignalComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add coffee to cart correctly', () => {
    component.addCart(0, component.coffees()[0]);
    expect(component.cartCoffees().length).toBe(1);
    expect(component.cartCoffees()[0].name).toEqual('Cappuccino');
  });

  it('should not add out of stock coffee to cart', () => {
    component.addCart(3, component.coffees()[3]);
    expect(component.cartCoffees().length).toBe(0);
  });

  it('should not add duplicate coffee to cart', () => {
    component.addCart(0, component.coffees()[0]);
    component.addCart(0, component.coffees()[0]);
    expect(component.cartCoffees().length).toBe(1);
  });

  it('should update quantity and price when changed', () => {
    component.addCart(0, component.coffees()[0]);
    component.changeQuantity(0, component.cartCoffees()[0].id, '2');
    expect(component.cartCoffees()[0].quantity).toBe(2);
    expect(component.cartCoffees()[0].totalPrice).toBe(
      component.coffees()[0].price * 2
    );
  });

  it('should remove coffee from cart and update stock', () => {
    component.addCart(0, component.coffees()[0]);
    expect(component.coffees()[0].stock).toBe(9);
    component.removeCart(0, component.cartCoffees()[0]);
    expect(component.cartCoffees().length).toBe(0);
    expect(component.coffees()[0].stock).toBe(10);
  });

  it('should calculate total price correctly', () => {
    component.addCart(0, component.coffees()[0]);
    component.addCart(1, component.coffees()[1]);
    expect(component.totalPrice()).toBe(1050000);
  });
});
