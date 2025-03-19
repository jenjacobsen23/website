import { Component } from '@angular/core';
import { SmartComponent } from './smart/smart.component';
import { BrainChangerComponent } from './brain-changer/brain-changer.component';
import { OtherExperienceComponent } from './other-experience/other-experience.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    SmartComponent,
    BrainChangerComponent,
    OtherExperienceComponent,
    MatButtonModule,
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {}
