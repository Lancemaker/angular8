import { Component, OnInit } from '@angular/core';

@Component({
  // attribute selector option :
  // selector : '[app-servers]'
  // selector : '.app-servers'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created as : ' + this.serverName;
  }

  onUpdateServerName( event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
