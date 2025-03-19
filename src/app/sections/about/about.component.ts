import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, AboutMeComponent, MySkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
