import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';

// Initialize Firebase
  export const config = {
    apiKey: "AIzaSyAi2YvsHC89ChXjRWlxMycxk8uq2JVab-o",
    authDomain: "friendschat-8ff5a.firebaseapp.com",
    databaseURL: "https://friendschat-8ff5a.firebaseio.com",
    projectId: "friendschat-8ff5a",
    storageBucket: "friendschat-8ff5a.appspot.com",
    messagingSenderId: "934223015457"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(config),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
