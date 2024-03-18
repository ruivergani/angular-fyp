import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css'],
  imports: [ButtonComponent]
})
export class MenuComponent {
  @Output() onButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  handleButtonClick(operation: string) {
    this.onButtonClick.emit(operation);
  }
}
