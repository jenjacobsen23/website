import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',

    'SASS',
    'Angular Material',
    'Bootstrap',
    'C#',
    '.NET Core',
    'EF Core 6',
    'SQL',
  ];

  tools: string[] = [
    'GIT',
    'VS Code',
    'SSMS',
    'Azure DevOps',
    'CI/CD Pipelines',
    'Azure PaaS',
    'SonarQube',
    'Cypress',
  ];
}
