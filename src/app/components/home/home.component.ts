import { Component } from '@angular/core';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countNumber = 0;
  ngOnInit() {
    setInterval(() => {
      this.countNumber++;
    }, 1000)
  }
}
