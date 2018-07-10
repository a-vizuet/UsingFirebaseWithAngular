import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ThingService } from '../../../services/thing.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-get-thing',
  templateUrl: './get-thing.component.html',
  styleUrls: ['./get-thing.component.css']
})
export class GetThingComponent implements OnInit {
  thingKey: string;
  thing: Observable<any>;

  constructor(private userService: UserService, private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.thingKey = params.get('key');
      this.thing = this.thingService.getThing(this.thingKey);
    });
  }

  ngOnInit() {
  }

  test(thing) {
    if (thing == null) { return false; }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (thing.length > 0) {    return true; }
    if (thing.length === 0) {  return false; }

    // If it isn't an thingect at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof thing !== 'object') { return false; }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (const key in thing) {
        if (Object.getOwnPropertyNames.call(thing, key)) { return true; }
    }

    return false;
  }

  removeThing() {
    const removePromises = this.thingService.removeThing(this.thingKey);

    removePromises
      .then(res => M.toast({ html: `The thing has successfully removed!` }))
      .catch(err => M.toast({ html: `There was an error trying to remove the thing!` }));
  }

}
