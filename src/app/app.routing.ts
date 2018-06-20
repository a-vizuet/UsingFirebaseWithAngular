import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ThingsComponent } from './components/things/things.component';
import { ThingComponent } from './components/thing/thing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ThingChildrenRoutes } from './components/thing/thing.routing';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'LogIn', component: LogInComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'Things', component: ThingsComponent },
  { path: 'Thing', component: ThingComponent, children: ThingChildrenRoutes },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
