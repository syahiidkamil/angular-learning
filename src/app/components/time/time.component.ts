import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { TimePipe } from "../../pipes/time.pipe";

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

  constructor() { 
    console.log("constructor");
  } // Untuk memanggil injection service

  ngOnInit() { // Component diinisialisasi
    interval(1000).subscribe(() => {
      this.date = new Date();
      this.dateChange.emit(this.date);
    });

    console.log("ngOnInit");
  }

  ngOnChanges() { // Jika ada perubahan pada component
    console.log("ngOnChanges");
  }

  ngDoCheck() { 
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  
}
