import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './sections/landing/landing.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './sections/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website';
}
