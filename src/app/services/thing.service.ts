import { Injectable } from '@angular/core';
import { Thing } from '../models/thing';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  things: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  addThing(thing: Thing) {}

  updateThing(thing: Thing) {}

  getThing() {}

  getThings() {
    this.things = this.db.list('').snapshotChanges().pipe(
      map(actions => actions.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  removeThing() {}

}
