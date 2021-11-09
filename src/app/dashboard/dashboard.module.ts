import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SidenavComponent,
    OnboardingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule

  ]
})
export class DashboardModule { }
