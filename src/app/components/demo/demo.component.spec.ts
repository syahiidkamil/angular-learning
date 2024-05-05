import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change isOn when is clicked() is triggered/called', () => {
    expect(component.isOn).withContext('off first at default').toBe(false);

    component.clicked(); // trigger the click once

    expect(component.isOn).withContext('after clicked').toBe(true);
  });
});
