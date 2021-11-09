import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public sidenavContents = [
    {
      name: 'Home',
      imageUrl: 'assets/images/sidenav/home_logo.svg',
      link: '/home'
    },
    {
      name: 'AML Check',
      imageUrl: 'assets/images/sidenav/aml_check_logo.svg',
      link: '/home'
    },
    {
      name: 'Onboarding',
      imageUrl: 'assets/images/sidenav/risk_policy_logo.svg',
      link: '/onboarding'
    },
    {
      name: 'Risk Policy',
      imageUrl: 'assets/images/sidenav/risk_policy_logo.svg',
      link: ''
    },
    {
      name: 'Reports',
      imageUrl: 'assets/images/sidenav/reports_logo.svg',
      link: ''
    },
    {
      name: 'Setting',
      imageUrl: 'assets/images/sidenav/settings_logo.svg',
      link: ''
    },
    {
      name: 'Billing',
      imageUrl: 'assets/images/sidenav/billing_logo.svg',
      link: ''
    },
  ];
  public selectectedIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  public getSelectedTabIndex(tabIndex: number): void {
    this.selectectedIndex = tabIndex;
  }

}
