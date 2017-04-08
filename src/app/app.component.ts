import { Component } from '@angular/core';
import {AngularFire,AuthMethods,AuthProviders,FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:FirebaseListObservable<any>;
  name:any;
  msgVal:string='';

  constructor(private _angularFire:AngularFire){
this.items=_angularFire.database.list('/messages',{query:{limitToLast:5}});
this._angularFire.auth.subscribe(au=>{if(au){this.name=au}});
console.log(JSON.stringify(this.name));

 }

 logIn(){
this._angularFire.auth.login({
                   provider:AuthProviders.Google,
                   method:AuthMethods.Popup});
}
logOut(){
this._angularFire.auth.logout();
this.name='';
}

 chatSend(chatMsg:string){
this.items.push({messages:chatMsg,name:this.name.google.displayName,picUrl:this.name.google.photoURL});
this.msgVal='';
}

}
