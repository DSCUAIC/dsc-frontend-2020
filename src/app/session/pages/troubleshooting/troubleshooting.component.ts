import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-troubleshooting',
  templateUrl: './troubleshooting.component.html',
  styleUrls: ['./troubleshooting.component.scss']
})
export class TroubleshootingComponent {
  @Output() public request: EventEmitter<any> = new EventEmitter();
}
