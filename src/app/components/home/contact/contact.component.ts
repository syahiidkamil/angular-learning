import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() name: string = "Hello Contact";

  @Output() nameOut = new EventEmitter<string>;

  constructor() {
     // this.about.getData();
  }

  sendMessage() {
    this.nameOut.emit("Sebarkan kebaikan Enigmacamp!");
  }



  ngOnInit() {
    console.log("Name ngOnInit: ", this.name);
  }

  ngOnChanges() {
    console.log("Name ngOnChange: ", this.name);
  }
}
