import { Injectable } from '@angular/core';
import { Thing } from '../models/thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor() { }

  addThing(thing: Thing) {}

  updateThing(thing: Thing) {}

  getThing() {}

  getThings() {

  }

  removeThing() {}

}
