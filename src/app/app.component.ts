import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aditira Tamvan';
  newImageUrl = "https://i.pinimg.com/736x/65/e2/7b/65e27b687e93c7131843ed775c6ed8f5.jpg"

  items = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]

  changeImage() {
    console.log('What do you Do?');
    this.newImageUrl = "https://i.pinimg.com/originals/e7/ed/44/e7ed441ebdae802aea5bb1c49f21d7f0.jpg"
  }

  getNotify($event: string) {
    console.log($event);
    this.items[0] = { title: $event, link: 'https://id.wikipedia.org/wiki/Komeng' }
  }
}
