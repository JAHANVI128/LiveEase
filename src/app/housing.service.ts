import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  constructor() { }

  // protected housingList: HousingLocation[] = [
    // {
    //   id: 0,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: './assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 1,
    //   name: 'A113 Transitional Housing',
    //   city: 'Santa Monica',
    //   state: 'CA',
    //   photo: './assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
    //   availableUnits: 0,
    //   wifi: false,
    //   laundry: true
    // },
    // {
    //   id: 2,
    //   name: 'Warm Beds Housing Support',
    //   city: 'Juneau',
    //   state: 'AK',
    //   photo: './assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
    //   availableUnits: 1,
    //   wifi: false,
    //   laundry: false
    // },
    // {
    //   id: 3,
    //   name: 'Homesteady Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: './assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false
    // },
    // {
    //   id: 4,
    //   name: 'Happy Homes Group',
    //   city: 'Gary',
    //   state: 'IN',
    //   photo: './assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false
    // },
    // {
    //   id: 5,
    //   name: 'Hope Apartment Group',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: './assets/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg',
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 6,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: './assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
    //   availableUnits: 5,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 7,
    //   name: 'Hope Housing Solutions',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: './assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 8,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: './assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
    //   availableUnits: 10,
    //   wifi: false,
    //   laundry: false
    // },
    // {
    //   id: 9,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: './assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true
    // },{
    //   id: 9,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: './assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true
    // }
  // ];

  async getAllHousingLocation(): Promise<HousingLocation[]>{
    // return this.housingList;

    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    // return this.housingList.find(housingLocation => housingLocation.id === id);

    // const data = await fetch(this.url);
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  } 

  submitApplication(firstName: string, lastName: string, email: string, mobileNo: number){
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNo);
  }
}

// json-server --watch db.json
// Api-key: AIzaSyDORDQNgiFA9TSwugwiX817g5xalytTsgo