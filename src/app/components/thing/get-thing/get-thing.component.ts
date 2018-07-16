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
  thing: Observable<any>;

  constructor(private userService: UserService, private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.thing = this.thingService.getThing(params.get('key')));
  }

  ngOnInit() {
  }

  removeThing(key, name) {
    const removePromises = this.thingService.removeThing(key);

    removePromises
      .then(res => M.toast({ html: `${name} has successfully removed!` }))
      .catch(err => M.toast({ html: `There was an error trying to remove ${name}!` }));
  }

}
