import { Component } from '@angular/core';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';

@Component({
  selector: 'app-smart',
  standalone: true,
  imports: [ExperienceSectionComponent],
  templateUrl: './smart.component.html',
})
export class SmartComponent {
  additionalIcons: string[] = [
    'devicon-sonarqube-original',
    'devicon-cypressio-plain',
  ];
}
