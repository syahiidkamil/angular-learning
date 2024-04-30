import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Comment } from '../../interfaces/comments';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loadData() {
    this.homeService
      .getData('3', 'Mallory_Kunze@marie.org')
      .subscribe((data) => {
        console.log(data);
        this.listComments = data as unknown as Comment[];
      });

    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      console.log(params.get('name'));
    });
  }

  refreshData() {
    this.loadData();
  }
  listComments: Comment[] = [];
  @Input()
  set id(id: string) {
    console.log('Id from Parent', id);
  }

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
  }
}
