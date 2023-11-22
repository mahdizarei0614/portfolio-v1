import { Component } from '@angular/core';
import { BriefComponent } from './brief/brief.component';
import { S0HeaderComponent } from './s0-header/s0-header.component';
import { S2BiographyComponent } from './s2-biography/s2-biography.component';
import { S1LandingComponent } from './s1-landing/s1-landing.component';
import { S3ExperienceComponent } from './s3-experience/s3-experience.component';
import { S5SkillsComponent } from './s5-skills/s5-skills.component';
import { S6CertificationsComponent } from './s6-certifications/s6-certifications.component';
import { Sx0CasinoComponent } from './sx0-casino/sx0-casino.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [BriefComponent, S0HeaderComponent, S2BiographyComponent, S1LandingComponent, S3ExperienceComponent, S5SkillsComponent, S6CertificationsComponent, Sx0CasinoComponent]
})
export class HomeComponent {
}
