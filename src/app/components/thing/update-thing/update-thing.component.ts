import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThingService } from '../../../services/thing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-thing',
  templateUrl: './update-thing.component.html',
  styleUrls: ['./update-thing.component.css']
})
export class UpdateThingComponent implements OnInit {
  thingKey: string;
  thing: Observable<any>;

  constructor(private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.thingKey = this.activatedRoute.snapshot.paramMap.get('key');
    this.thing = this.thingService.getThing(this.thingKey);
  }

  ngOnInit() {
    this.thing.forEach(item => console.log(item))
  }

}
