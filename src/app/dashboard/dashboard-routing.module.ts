import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
