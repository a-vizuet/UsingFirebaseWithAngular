import { Component, OnInit } from '@angular/core';
import { ThingService } from '../../services/thing.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit {

  constructor(private thingService: ThingService) { }

  ngOnInit() {}

  removeThing(key) {
    const removePromises = this.thingService.removeThing(key);

    removePromises
      .then(res => M.toast(res))
      .catch(err => M.toast(err));
  }

}
