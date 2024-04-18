import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { Boss } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe, NgOptimizedImage],
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

  userService = inject(UserService)

  constructor() {
      this.bosses = this.userService.getBosses();
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
