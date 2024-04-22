import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';
import { TimePipe } from "../../../pipes/time.pipe";

@Component({
    selector: 'app-time',
    standalone: true,
    templateUrl: './time.component.html',
    styleUrl: './time.component.scss',
    imports: [TimePipe]
})
export class TimeComponent {
  date: Date = new Date();

  @Output() dateChange = new EventEmitter<Date>();

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.date = new Date();
      this.dateChange.emit(this.date);
    });
  }
}
