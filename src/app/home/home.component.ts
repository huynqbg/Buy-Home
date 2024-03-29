import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = []

  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = housingLocationList
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
    }
    this.filteredLocationList = this.housingLocationList.filter(housingLocation => 
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      )
  }
 
}
