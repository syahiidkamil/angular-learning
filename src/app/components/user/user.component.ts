import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

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

  @Input() occupation: string = "Data Scientist";
  @Input() imageUrl: string = "Url boss";
  @Output() onNotify = new EventEmitter<string>();

  sendNotify() {
    this.onNotify.emit('Spontan Uhuyyy!');
  }

  bosses = [
    {
      id: 1,
      name: "gagas",
      wealth: 271000000000000, // 271 billion hasil dari tambang batu bara
      age: 32,
      imageUrl: "https://media.licdn.com/dms/image/C4E03AQGfHxbi7fMdXQ/profile-displayphoto-shrink_800_800/0/1653819338773?e=2147483647&v=beta&t=XTfoOnmxiReUMVQ6WU70L6ahwPtZdXoaopjK3SdgDCA",
      imgSize: 100
    },
    {
      name: "budi",
      wealth: 200000000000000, // 200 billion
      age: 25,
      imgSize: 100
    },
    {
      name: "joni",
      wealth: 100000000000000, // 100 billion
      age: 30,
      imgSize: 100
    },
    {
      name: "kadita",
      wealth: 100000000000000, // 100 billion
      age: 25,
      imgSize: 100
    },
    {
      name: "siti",
      wealth: 100000000000000, // 100 billion
      age: 30,
      imgSize: 100
    },
    {
      name: "aditira tamvan",
      wealth: 150000000000000, // 100 billion
      age: 30,
      imageUrl: "https://imgsrv2.voi.id/7GkhN5YW_BOMsFylAsHBm1sALKRcY0nskDu00AcoDqA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85NDQzNS8yMDIxMTAxNDEzNTAtbWFpbi5qcGc.jpg",
      imgSize: 100
    }
  ]

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
