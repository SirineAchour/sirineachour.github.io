import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDividerModule } from '@angular/material/divider'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatChipsModule } from '@angular/material/chips'
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { RouterLink, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list';
import { TimelineComponent } from './components/timeline/timeline.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { InterestsComponent } from './components/interests/interests.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TimelineComponent,
    EducationComponent,
    ExperienceComponent,
    CertificatesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCardModule,
    //RouterModule.forRoot([])
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
