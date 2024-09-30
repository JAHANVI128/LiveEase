import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routeConfig: Routes = [
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'details/:id',
        component:DetailsComponent,
    },
    {
        path:'submitform',
        component:FormComponent,
    }
];

export default routeConfig;