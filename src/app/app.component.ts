import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimePipe } from './pipes/time.pipe';
import { Observable, interval, map } from 'rxjs';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'aditira-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DatePipe, TimePipe, CommonModule],
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

  date: string|number|Date = new Date();
  date$: Observable<Date> | undefined;
  @ViewChild('clockDisplay', { static: true }) clockDisplay: | ElementRef | undefined;

  // constructor(private clockService: ClockService) {
  //   // this.date$ = clockService.getClock();
  // }

  ngOnInit() {
    // Block oninit:
    this.updateTime();
    // setInterval(() => {
    //   this.updateTime();
    // }, 1000);
  }

  updateTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = this.padZero(minutes);
    const formattedSeconds = this.padZero(seconds);
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    if (!this.clockDisplay) return;
    this.clockDisplay.nativeElement.textContent = timeString;
  }

  padZero(num: number) {
    return num < 10 ? '0' + num : num;
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
