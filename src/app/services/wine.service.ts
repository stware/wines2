import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private firestore: AngularFirestore) {}

  getWines(): Observable<any> {
    return this.firestore
      .collection('wines', (ref) => ref.orderBy('name', 'asc'))
      .snapshotChanges();
  }
}
