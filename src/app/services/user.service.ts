import { Injectable } from '@angular/core';
import { Boss } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  bosses: Boss[] = [{
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
  }]

  constructor() { }

  getBosses(): Boss[] {
    return this.bosses
  }

  getBoss(name: string): Boss {
    return this.bosses.find(boss => boss.name === name) as Boss;
  }
} 
