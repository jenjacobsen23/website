import { Component } from '@angular/core';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';

@Component({
  selector: 'app-brain-changer',
  standalone: true,
  imports: [ExperienceSectionComponent],
  templateUrl: './brain-changer.component.html',
})
export class BrainChangerComponent {}
