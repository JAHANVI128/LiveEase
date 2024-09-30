import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private housingService: HousingService) {}  
  
  housingLocationObjId: number = 0;
  housingLocationObj: HousingLocation | undefined;
  // applyForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  //   mobileNo: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')]),
  // });

  ngOnInit(): void {
    const housingLocationObjId = Number(this.route.snapshot.paramMap.get('id'));
    // this.housingLocationObj = this.housingService.getHousingLocationById(housingLocationObjId);

    this.housingService.getHousingLocationById(housingLocationObjId).then(housingLocation => {
      this.housingLocationObj = housingLocation;
    })
  }

  // submitApplication() {
  //   if (this.applyForm.valid) {
  //     this.housingService.submitApplication(
  //       this.applyForm.value.firstName ?? '',
  //       this.applyForm.value.lastName ?? '',
  //       this.applyForm.value.email ?? '',
  //       this.applyForm.value.mobileNo ?? ''
  //     );
  //     this.applyForm.reset();
  //     alert("Form is submitted");
  //   } else {
  //     alert("Form is invalid");
  //   }
  // }

  // get firstNameErrors() {
  //   const control = this.applyForm.get('firstName');
  //   return control.touched && control.errors;
  // }
}