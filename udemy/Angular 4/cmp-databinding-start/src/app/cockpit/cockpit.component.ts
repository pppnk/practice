import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    const me = this;
    me.serverCreated.emit({
      serverName: me.newServerName,
      serverContent: me.newServerContent
    });
  }

  onAddBlueprint(){
    const me = this;
    me.blueprintCreated.emit({
      serverName: me.newServerName,
      serverContent: me.newServerContent
    });
  }
}
