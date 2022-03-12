import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Observable } from 'rxjs';
import { Post } from '../../data/models/post';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  items$: Observable<Post[]>;

  constructor(public service: DataService) {
    this.items$ = this.service.getLatestPosts();
  }

  ngOnInit(): void {}
}
