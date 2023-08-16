import { Component, OnInit } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute, 
    private housingSevice: HousingService 
    ) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10)

    this.housingSevice.getHousingLocationById(housingLocationId).then(
      housingLocation => { this.housingLocation = housingLocation } 
    )
  }

  submitApplication() {
    this.housingSevice.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
