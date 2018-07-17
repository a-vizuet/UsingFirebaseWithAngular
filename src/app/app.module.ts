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
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { UserService } from './services/user.service';
import { ThingService } from './services/thing.service';
import { GetThingComponent } from './components/thing/get-thing/get-thing.component';
import { UpdateImageThingComponent } from './components/thing/update-image-thing/update-image-thing.component';

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
    UpdateThingComponent,
    GetThingComponent,
    UpdateImageThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [UserService, ThingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
