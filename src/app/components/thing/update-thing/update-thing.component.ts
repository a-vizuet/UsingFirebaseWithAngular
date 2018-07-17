import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThingService } from '../../../services/thing.service';
import { Observable } from 'rxjs';
import * as M from 'materialize-css';
import { Thing } from '../../../models/thing';

@Component({
  selector: 'app-update-thing',
  templateUrl: './update-thing.component.html',
  styleUrls: ['./update-thing.component.css']
})

export class UpdateThingComponent implements OnInit {
  thing: Observable<any>;

  constructor(private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.thing = thingService.getThing(params.get('key')));
  }

  ngOnInit() {}

  updateThing(key, thing) {
    console.log(thing)
    const updatePromises = this.thingService.updateThing(key, thing);

    updatePromises
      .then(res => M.toast({ html: `${thing.name} has successfully updated!` }))
      .catch(err => M.toat({ html: `There was an error trying to update ${thing.name}` }));
  }

  removeThing(key, name) {
    const removePromises = this.thingService.removeThing(key);

    removePromises
      .then(res => M.toast({ html: `${name} has successfully removed!` }))
      .catch(err => M.toast({ html: `There was an error trying to remove ${name}!` }));
  }

}
