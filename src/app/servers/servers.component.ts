import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverNewCreation = 'server not created';
serverName='';
username='';
serverCreated = false;

makeEnable() {
this.allowNewServer = true;
}
ngOnInit() {
}
onCreateServer() {
  this.serverCreated = true;
this.serverNewCreation = 'new server craeted';
}
onUpdateServerName(event:any) {
this.serverName = event.target.value;
}
 }
