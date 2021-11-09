import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  public searchCategories = [
    { name: 'Entity Search' },
    { name: 'AML Search List' },
    { name: 'Onboarding List' }
  ];

  public selectedSearchCategory: number = 0;

  public tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public picker: any;
  public countries = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  public getSelecctedCategory(index: number): void {
    this.selectedSearchCategory = index;
  }

}
