import { OnboardingService } from './services/onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

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
    this.firstName = new FormControl("", [Validators.required]);
    this.lastName = new FormControl("", [Validators.required]);
    this.country = new FormControl("", [Validators.required]);
    this.dateOfBirth = new FormControl("", [Validators.required]);

    this.userDetailForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country,
      dateOfBirth: this.dateOfBirth,
    });
  }

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
          console.log("vikram", result.data.content);
        })

      this.userDetailForm.reset();
    }
  }


}
