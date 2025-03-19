import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, MatToolbarModule, MenuNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
