import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public router: Router){}
  
  active = 1;
  title = 'Home Page';
}   
