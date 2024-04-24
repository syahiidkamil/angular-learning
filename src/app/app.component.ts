import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TimePipe } from './pipes/time.pipe';
import { TimeComponent } from './shared/components/time/time.component';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet,
    RouterLinkActive,
    DatePipe, 
    TimePipe, 
    CommonModule,
    TimeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aditira';
  newImageUrl = "https://i.pinimg.com/736x/65/e2/7b/65e27b687e93c7131843ed775c6ed8f5.jpg"
  isActive = false;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    
  }

  items = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]

  goHome() {
    let id = '454';
    console.log('Url:', this.router.url);
    if (this.router.url === '/home/454') {
      this.isActive = true;
    }
    console.log('Active:', this.isActive);
    this.router.navigate(['home', id], { relativeTo: this.activeRoute });
  }

  withComponentInputBinding() {
    console.log('Url:', this.router.url);
    if (this.router.isActive('/user', true)) {
      this.isActive = true;
    }
    let navigationExtras: NavigationExtras = {
      state: { 
        id: '123',
        name: 'Aditira',
        address: 'Jl. Pahlawan No. 1' 
      } // Data yang ingin Anda kirimkan
    };
    console.log('Active:', this.isActive);
    this.router.navigate(['/user'], navigationExtras);
  }

  ngOnInit() {

  }

  changeImage() {
    console.log('What do you Do?');
    this.newImageUrl = "https://i.pinimg.com/originals/e7/ed/44/e7ed441ebdae802aea5bb1c49f21d7f0.jpg"
  }

  getNotify($event: string) {
    console.log($event);
    this.items[0] = { title: $event, link: 'https://id.wikipedia.org/wiki/Komeng' }
  }
}
