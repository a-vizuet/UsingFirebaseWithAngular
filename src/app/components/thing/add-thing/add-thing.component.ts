import * as M from 'materialize-css';
import { Component, OnInit } from '@angular/core';
import { ThingService } from '../../../services/thing.service';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { Thing } from '../../../models/thing';

@Component({
  selector: 'app-add-thing',
  templateUrl: './add-thing.component.html',
  styleUrls: ['./add-thing.component.css']
})
export class AddThingComponent implements OnInit {

  thing: Thing = new Thing('', '', null, '');
  file: File;
  uploadPercent: Observable<number>;

  constructor(private thingService: ThingService, private userService: UserService) {}

  ngOnInit() {}

  addThing() {
    (<HTMLInputElement>document.getElementById('name')).value = '';
    (<HTMLInputElement>document.getElementById('description')).value = '';
    (<HTMLInputElement>document.getElementById('price')).value = '';
    (<HTMLInputElement>document.getElementById('image')).value = '';
    (<HTMLInputElement>document.getElementById('imageText')).value = '';

    const uploadImagePromises = this.thingService.uploadImage(this.file, this.file.name);
    this.uploadPercent = uploadImagePromises.percentageChanges();

    uploadImagePromises.then(resImageUploaded => {
      this.thing.image = resImageUploaded.metadata.name;
      const addThingPromises = this.thingService.addThing(this.thing);
      addThingPromises
        .then(resAdd => M.toast({ html: 'Thing added!' }));

      this.uploadPercent = undefined;
    }).catch(errImageUploaded => {
      M.toast({ html: `There was an error while trying to add a new thing. Try again. ${errImageUploaded}` });
      this.uploadPercent = undefined;
    });

  }

  getFile(event) {
    this.file = event.target.files[0];
  }

}
