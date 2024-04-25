import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule, 
    MatListModule, 
    MatSlideToggleModule,
    MatIconButton,
    MatIconModule,
    MatDividerModule,
    NgFor,
    NgIf,
    RouterLink,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    HomeComponent
  ],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  showFiller = false;

  menus = [
    {
      name: "Home",
      url: "/home",
      icon: "home",
      disabled: false
    },
    {
      name: "Contact",
      url: "/home/contact",
      icon: "mail",
      disabled: false
    },
    {
      name: "Services",
      url: "/home/services",
      icon: "chat",
      disabled: false
    },
    {
      name: "About",
      url: "/home/about",
      icon: "favorite",
      disabled: true
    },
    {
      name: "Dashboard",
      url: "/home/dashboard",
      icon: "dashboard"
    }
  ]
}
