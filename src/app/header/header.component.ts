import { Component, Output, EventEmitter } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MenuComponent, ButtonComponent]
})
export class HeaderComponent {
  @Output() onButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  handleButtonClick(operation: string): void {
    this.onButtonClick.emit(operation);
  }
}
