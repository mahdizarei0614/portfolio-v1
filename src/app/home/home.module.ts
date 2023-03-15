import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {S0HeaderComponent} from './s0-header/s0-header.component';
import {S1LandingComponent} from './s1-landing/s1-landing.component';
import {S2BiographyComponent} from './s2-biography/s2-biography.component';
import { S3ExperienceComponent } from './s3-experience/s3-experience.component';

@NgModule({
  declarations: [
    HomeComponent,
    S0HeaderComponent,
    S1LandingComponent,
    S2BiographyComponent,
    S3ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
