import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  getMessage($event: string) {
    console.log("Message ditangkap: ", $event)
  }
  name: string = "Hello Contact";
}
