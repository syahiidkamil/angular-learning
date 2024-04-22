import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Comment } from '../../interfaces/comments';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countNumber = 0;
  listComments: Comment[] = [];
  
  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
    setInterval(() => {
      this.countNumber++;
    }, 1000)

    this.homeService.getData('2', 'Mallory_Kunze@marie.org').subscribe((data) => {
      console.log(data);
      this.listComments = data.body as unknown as Comment[]
    })
  }

}
