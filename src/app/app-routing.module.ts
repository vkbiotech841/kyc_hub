import { OnboardingComponent } from './dashboard/onboarding/onboarding.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'onboarding', component: OnboardingComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
