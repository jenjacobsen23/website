import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-navigation',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './menu-navigation.component.html',
})
export class MenuNavigationComponent {}
