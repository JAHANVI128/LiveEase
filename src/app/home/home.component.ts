import { Component, OnInit, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import {HousingService} from '../housing.service'
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterCity: string = "";
  
  ngOnInit(): void {}
  
  housingList: HousingLocation[] = [];
  filterList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingService.getAllHousingLocation().then((housingList: HousingLocation[]) => {
      this.housingList = housingList;
      this.filterList = housingList;
    });
  }

  filterResults(text: string){
    if(!text){
      this.filterList = this.housingList;
    }

    this.filterList = this.housingList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}