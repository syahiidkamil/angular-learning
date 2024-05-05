import {
  CurrencyPipe,
  JsonPipe,
  NgClass,
  NgIf,
  NgStyle,
} from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Boss } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ClientError } from '../../interfaces/client.error';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe, NgOptimizedImage, CurrencyPipe, NgIf, NgClass, NgStyle],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  isLoggedIn = true;
  role = 'boss';
  buttonDisabled = false;
  logoUrl = './assets/look-up.jpg';
  logoAlt = 'Angular logo';
  bosses: Boss[] = [];
  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  @Input() occupation: string = 'Data Scientist';
  @Input() imageUrl: string = 'Url boss';
  listComments: Comment[] = [];

  @Output() onNotify = new EventEmitter<string>();

  error!: ClientError;
  completed = false;

  isSpecial: boolean = false;
  canSave = true;
  isUnchanged = true;

  id: string = '';
  name: string = '';
  address: string = '';

  constructor(private userService: UserService) {
    this.userService.getBosses().subscribe({
      next: (data) => (this.bosses = data),
      error: (err) => (this.error = err),
      complete: () => (this.completed = true),
    });

    const state = history.state || {};

    this.id = state.id;
    this.name = state.name;
    this.address = state.address;

    console.log('Data Router: ', this.id, this.name, this.address);
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: !this.canSave,
      modified: !this.isUnchanged,
      special: !this.isSpecial,
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  sendNotify() {
    this.onNotify.emit('Spontan Uhuyyy!');
  }

  onClickYes() {
    this.bosses[0].imgSize = 200;
  }

  onClickNo() {
    this.buttonDisabled = true;
    this.isSpecial = !this.isSpecial;
  }

  ngOnChanges() {
    this.bosses[4].imageUrl = this.imageUrl;
  }
}
