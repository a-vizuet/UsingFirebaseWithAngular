import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThingService } from '../../../services/thing.service';
import { Observable } from 'rxjs';
import * as M from 'materialize-css';

@Component({
  selector: 'app-update-thing',
  templateUrl: './update-thing.component.html',
  styleUrls: ['./update-thing.component.css']
})

export class UpdateThingComponent implements OnInit {
  thingGet: Observable<any>;

  constructor(private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.thingGet = thingService.getThing(params.get('key')));
  }

  ngOnInit() {}

  updateThing() {

  }

  removeThing(key, name) {
    const removePromises = this.thingService.removeThing(key);

    removePromises
      .then(res => M.toast({ html: `${name} has successfully removed!` }))
      .catch(err => M.toast({ html: `There was an error trying to remove ${name}!` }));
  }

}
