import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  postss: Observable<any[]>;
  collectionRef: any;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(firestore, 'article');
    this.postss = collectionData(this.collectionRef.ref);
  }
}
