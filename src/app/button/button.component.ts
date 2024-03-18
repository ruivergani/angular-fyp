import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
  @Input() title: string = ''; // Initialize the property here
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  handleClick() {
    this.onClick.emit();
  }
}
