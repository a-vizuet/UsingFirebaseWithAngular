import { Routes } from '@angular/router';

import { AddThingComponent } from './add-thing/add-thing.component';
import { UpdateThingComponent } from './update-thing/update-thing.component';
import { UpdateImageThingComponent } from './update-image-thing/update-image-thing.component';
import { GetThingComponent } from './get-thing/get-thing.component';

export const ThingChildrenRoutes: Routes = [
  { path: '', redirectTo: 'thing', pathMatch: 'full' },
  { path: 'add', component: AddThingComponent },
  { path: 'get/:key', component: GetThingComponent },
  { path: 'update/:key', component: UpdateThingComponent },
  { path: 'update/image/:key', component: UpdateImageThingComponent }
];
