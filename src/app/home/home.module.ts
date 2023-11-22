import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { S0HeaderComponent } from './s0-header/s0-header.component';
import { S1LandingComponent } from './s1-landing/s1-landing.component';
import { S2BiographyComponent } from './s2-biography/s2-biography.component';
import { S3ExperienceComponent } from './s3-experience/s3-experience.component';
import { S4EducationComponent } from './s4-education/s4-education.component';
import { S5SkillsComponent } from './s5-skills/s5-skills.component';
import { S6CertificationsComponent } from './s6-certifications/s6-certifications.component';
import {
  CertificationItemComponent
} from './s6-certifications/certification-item/certification-item.component';
import { Sx0CasinoComponent } from './sx0-casino/sx0-casino.component';
import { MinesweeperComponent } from './sx0-casino/components/minesweeper/minesweeper.component';
import { BriefComponent } from './brief/brief.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent,
    S0HeaderComponent,
    S1LandingComponent,
    S2BiographyComponent,
    S3ExperienceComponent,
    S4EducationComponent,
    S5SkillsComponent,
    S6CertificationsComponent,
    CertificationItemComponent,
    Sx0CasinoComponent,
    MinesweeperComponent,
    BriefComponent,
    ClockComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
