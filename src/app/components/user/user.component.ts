import { CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { Boss } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe, NgOptimizedImage, CurrencyPipe, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  isLoggedIn = true;
  role = "boss";
  buttonDisabled = false;
  logoUrl = './assets/look-up.jpg';
  logoAlt = 'Angular logo';
  bosses: Boss[] = []

  @Input() occupation: string = "Data Scientist";
  @Input() imageUrl: string = "Url boss";
  @Output() onNotify = new EventEmitter<string>();

  error!: string;
  completed = false;

  constructor(private userService: UserService) {
      this.userService.getBosses().subscribe({
        next: data => this.bosses = data,
        error: err => this.error = err,
        complete: () => this.completed = true,
      });
  }

  sendNotify() {
    this.onNotify.emit('Spontan Uhuyyy!');
  }

  onClickYes() {
    this.bosses[0].imgSize = 200;
  }

  onClickNo() {
    this.buttonDisabled = true;
  }

  ngOnChanges() {
    console.log("Ini ada yang ngubah");
    this.bosses[4].imageUrl = this.imageUrl
  }
}
