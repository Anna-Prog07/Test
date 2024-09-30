import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  Output(): any select = new EventEmitter<string>();

  select(component: string) {
    this.select.emit(component);
  }

  logout() {
    window.location.reload();
  }
}
