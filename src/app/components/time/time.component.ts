import { MasterService } from './../../services/master.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TimePipe } from '../../pipes/time.pipe';

@Component({
  selector: 'app-time',
  standalone: true,
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss',
  imports: [TimePipe],
})
export class TimeComponent {
  date: Date = new Date();
  private timerSubscription!: Subscription;

  @Output() dateChange = new EventEmitter<Date>();

  constructor(private masterService: MasterService) {
    console.log('constructor');
    masterService.getTodos(2).subscribe((data) => {
      console.log('masterService data', data);
    });
  } // Untuk memanggil injection service

  ngOnInit() {
    // Component diinisialisasi
    this.timerSubscription = interval(1000).subscribe(() => {
      this.date = new Date();
      this.dateChange.emit(this.date);
    });

    console.log('ngOnInit');
  }

  ngOnChanges() {
    // Jika ada perubahan pada component
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
