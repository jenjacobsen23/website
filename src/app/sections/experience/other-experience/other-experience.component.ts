import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';

@Component({
  selector: 'app-other-experience',
  standalone: true,
  imports: [MatButtonModule, ExperienceSectionComponent],
  templateUrl: './other-experience.component.html',
})
export class OtherExperienceComponent {}
