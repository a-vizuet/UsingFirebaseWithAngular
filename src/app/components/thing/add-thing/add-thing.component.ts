import { Component, OnInit } from '@angular/core';
import { ThingService } from '../../../services/thing.service';
import { Thing } from '../../../models/thing';
import * as M from 'materialize-css';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-thing',
  templateUrl: './add-thing.component.html',
  styleUrls: ['./add-thing.component.css']
})
export class AddThingComponent implements OnInit {

  thing: Thing = new Thing('', '', 0.0, '');
  file: File;

  constructor(private thingService: ThingService, private userService: UserService) {}

  ngOnInit() {}

  addThing() {
    const uploadImagePromises = this.thingService.uploadImage(this.file);

    uploadImagePromises.then(resUpload => {
      const addThingPromises = this.thingService.addThing(this.thing);
      addThingPromises
        .then(resAdd => M.toast({ html: 'Thing added!' }));
    }).catch(

    );

  }

  getFile(event) {
    this.file = event.target.files[0];
  }

}
