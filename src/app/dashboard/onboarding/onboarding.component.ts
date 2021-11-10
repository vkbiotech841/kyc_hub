import { OnboardingService } from './services/onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';


export interface SearchedUser {
  name: string;
  category: any;
  country: string;
  source: string;
  riskStatus: string;
}


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  public searchResult: any[] = [];
  public filteredUserDetails: any[] = [];

  public displayedColumns: string[] = ['name', 'category', 'country', 'source', 'riskStatus'];
  public dataSource: SearchedUser[] = [];

  public searchCategories = [
    { name: 'Entity Search' },
    { name: 'AML Search List' },
    { name: 'Onboarding List' }
  ];

  public selectedSearchCategory: number = 0;
  public picker: any;
  public countries = [
    { value: 'india', viewValue: 'India' },
    { value: 'uk', viewValue: 'UK' },
    { value: 'germany', viewValue: 'Germany' },
  ];

  public userDetailForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public country: FormControl;
  public dateOfBirth: FormControl;

  public fullNameArray: string[] = [];
  public countryArray: string[] = [];
  private unsubscriber$ = new Subject();


  constructor(
    private onboardingService: OnboardingService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeAndValidateForm();
  }

  public getSelecctedCategory(index: number): void {
    this.selectedSearchCategory = index;
  }

  public initializeAndValidateForm(): void {
    this.firstName = new FormControl("Sabtina", [Validators.required]);
    this.lastName = new FormControl("Ltd", [Validators.required]);
    this.country = new FormControl("", [Validators.required]);
    this.dateOfBirth = new FormControl("", [Validators.required]);

    this.userDetailForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country,
      dateOfBirth: this.dateOfBirth,
    });
  }

  public isFormSubmited: boolean = false;
  public submitUserDetails() {
    this.fullNameArray = [];
    this.countryArray = [];

    if (this.userDetailForm.invalid) {
    } else {
      let fullname = `${this.firstName.value} ${this.lastName.value}`;
      this.fullNameArray.push(fullname);
      this.countryArray.push(this.country.value);
      console.log("data", this.userDetailForm.value);
      const data = {
        "size": 10,
        "page": 0,
        "searchType": "FUZZY",
        "name": this.fullNameArray,
        "country": [],
        "source": [],
        "guid": "",
        "category": [],
        "gender": [],
        "type": ["Organisation"]
      };
      this.onboardingService.getOnboardingData(data)
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(result => {

          this.isFormSubmited = true;
          this.searchResult = result.data.content;
          console.log("vikram", result.data.content);
          this.filteredUserDetails = [];

          this.searchResult.forEach(result => {
            let userData = {
              name: result.details[0].fullName,
              category: result.details[0].category?.name,
              country: result.details[0].rawData.country,
              source: result.details[0].datasource.name,
              riskStatus: result.details[0].rawData.status
            }
            this.filteredUserDetails.push(userData);
          })
          this.dataSource = this.filteredUserDetails;
        }, error => {
          console.log("error", error);
        })


      this.userDetailForm.reset();
    }
  }


}
