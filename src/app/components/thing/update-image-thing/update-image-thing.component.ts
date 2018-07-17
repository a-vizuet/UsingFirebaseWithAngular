import { Component, OnInit } from '@angular/core';
import { ThingService } from '../../../services/thing.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as M from 'materialize-css';
import { Thing } from '../../../models/thing';

@Component({
  selector: 'app-update-image-thing',
  templateUrl: './update-image-thing.component.html',
  styleUrls: ['./update-image-thing.component.css']
})
export class UpdateImageThingComponent implements OnInit {
  thing: Observable<any>;
  uploadPercent: Observable<number>;
  file: File;

  constructor(private thingService: ThingService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.thing = thingService.getThing(params.get('key')));
  }

  ngOnInit() {
  }

  updateImageThing(key, thing) {

    (<HTMLInputElement>document.getElementById('image')).value = '';
    (<HTMLInputElement>document.getElementById('imageText')).value = '';

    const uploadImagePromises = this.thingService.uploadImage(this.file, this.file.name);
    this.uploadPercent = uploadImagePromises.percentageChanges();

    uploadImagePromises
      .then(resImageUploaded => {
        const update = new Thing(null, null, null, resImageUploaded.metadata.name),
              updateThingPromises = this.thingService.updateThing(key, update);

        updateThingPromises
          .then(resUpdated => M.toast({ html: `${thing.name} image has successfully updated!` }))
          .catch(errUpdated => M.toast({ html: `There was an error trying to update ${thing.name} image!` }));

        this.uploadPercent = undefined;

      })
      .catch(errImageUploaded => {
        M.toast({ html: `There was an error while trying to update the thing image. Try again. ${errImageUploaded}` });
        this.uploadPercent = undefined;
      });

  }

  getFile(event) {
    this.file = event.target.files[0];
  }
}
