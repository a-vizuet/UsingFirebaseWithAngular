import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ThingsComponent } from './components/things/things.component';
import { ThingComponent } from './components/thing/thing.component';
import { AddThingComponent } from './components/thing/add-thing/add-thing.component';
import { UpdateThingComponent } from './components/thing/update-thing/update-thing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ThingsComponent,
    ThingComponent,
    SignInComponent,
    LogInComponent,
    HomeComponent,
    NotFoundComponent,
    AddThingComponent,
    UpdateThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
