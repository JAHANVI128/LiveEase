import { Component, Input, OnInit } from '@angular/core';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }

  @Input() housingLocationObj:HousingLocation;


}
