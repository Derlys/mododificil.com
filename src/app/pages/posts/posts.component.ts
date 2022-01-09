import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data/data.service';
import { Post } from '../../data/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  items$: Observable<Post[]>;

  constructor(public service: DataService) {
    this.items$ = this.service.posts$;
  }

  ngOnInit(): void {}
}
