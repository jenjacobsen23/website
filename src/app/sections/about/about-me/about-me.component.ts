import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './about-me.component.html',
  styleUrl: '../about.component.scss',
})
export class AboutMeComponent {}
