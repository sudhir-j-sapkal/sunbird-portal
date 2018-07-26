import { ResourceService } from '../../services';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ICard} from '../../interfaces';
import { IImpressionEventInput, IInteractEventObject } from '@sunbird/telemetry';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent {
/**
* content is used to render IContents value on the view
*/
@Input() data: ICard;
@Input() customClass: string;
@Output('clickEvent')
clickEvent = new EventEmitter<any>();

public onAction(data, action) {
  this.clickEvent.emit({'action': action, 'data': data});
  }
}
