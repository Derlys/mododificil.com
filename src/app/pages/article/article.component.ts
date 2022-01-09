import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../data/models/post';
import { DataService } from '../../data/data.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  item$: Observable<Post | undefined> = this.route.params.pipe(
    map((params: any) => params.id),
    switchMap((id) => this.service.loadPost(id))
  );

  constructor(public route: ActivatedRoute, public service: DataService) {}

  ngOnInit(): void {}
}
