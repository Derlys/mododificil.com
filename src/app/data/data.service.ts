import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Post } from './models/post';
import { posts } from './posts/posts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  postsSubject = new BehaviorSubject<Post[]>(posts);
  posts$ = this.postsSubject.asObservable();

  loadPost(id: string) {
    return of(this.postsSubject.getValue().find((post) => post.id === id));
  }
}
