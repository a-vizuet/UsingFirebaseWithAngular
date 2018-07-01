import { Routes } from '@angular/router';

import { AddThingComponent } from './add-thing/add-thing.component';
import { UpdateThingComponent } from './update-thing/update-thing.component';
import { ThingComponent } from './thing.component';

export const ThingChildrenRoutes: Routes = [
  { path: '', redirectTo: 'thing', pathMatch: 'full' },
  { path: 'add', component: AddThingComponent },
  { path: 'update/:id', component: UpdateThingComponent }
  //{ path: 'get/:id' }
];
