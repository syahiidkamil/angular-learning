import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Tile } from '../../interfaces/layout';
import { HighlightDirective } from '../../directives/highlight.directive';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


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
    MatGridListModule,
    MatIconModule,
    MatRadioModule,
    CommonModule,
    HomeComponent,
    FormsModule,
    HighlightDirective
  ],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  currentClasses: Record<string, boolean> = {};
  onRadioChange($event: MatRadioChange) {
    console.log("Radio:", $event)
    switch ($event.value) {
      case "tingkiwingky":
        this.currentClasses = {
          'color-purple': true,
          'shape-3': true
        }
        break;
      case "dipsi":
        this.currentClasses = {
          'color-green': true,
          'shape-2': true
        }
        break;
      case "lala":
        this.currentClasses = {
          'color-yellow': true,
          'shape-1': true
        }
        break;
      default:
        this.currentClasses = {
          'wakwaw': true,
        }
        break;
    }
  }
  color: string = 'green';
  angka: string = '{{ angka }}';
  contactClass: string = "contact";
  radioValue!: string;
  onScroll($event: Event) {
    console.log($event);
  }
  onClick() {
    console.log("Mouse Over");
    this.contactClass = "contact-active";
  }
  showFiller = false;
  currentPage: string = "Home";

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  menus = [
    {
      name: "Home",
      icon: "home",
      disabled: false
    },
    {
      name: "Contact",
      icon: "mail",
      disabled: false
    },
    {
      name: "Service",
      icon: "chat",
      disabled: false
    },
    {
      name: "About",
      icon: "favorite",
      disabled: true
    },
    {
      name: "Dashboard",
      icon: "dashboard"
    }
  ]
  classHeader: string = "title";
  currentStyles: Record<string, string> = {};
  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles()
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
        saveable: true,
        modified: true,
        special: true,
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': 'normal',
      'font-weight': 'normal',
      'font-size': '12px',
    };
  }

  homeClicked() {
    this.classHeader = "title-clicked";
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: false,
    };

    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px',
    }
  }
  onPageChange(page:string) {
    this.currentPage=page;
  }
}
