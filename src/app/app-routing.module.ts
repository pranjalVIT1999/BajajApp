import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService} from './Components/Services/Guard-Services/auth-guard.service'
import { AboutUsComponent } from './Components/Features/about-us/about-us.component';
import { DoctorsComponent } from './Components/Features/doctors/doctors.component';
import { HomeComponent } from './Components/Features/home/home.component';
import { ProjectsComponent } from './Components/Features/projects/projects.component';
import { PatientComponent } from './Components/patient/patient.component';
import { ServicesComponent } from './Components/Features/services/services.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
{
  path:'patient',
  component: PatientComponent,
  canActivate: [AuthGuardService]
},
{
  path:'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuardService]

},
{
  path:'aboutus',
  component: AboutUsComponent,
  canActivate: [AuthGuardService]
},
{
  path:'doctors',
  component: DoctorsComponent,
  canActivate: [AuthGuardService]
},
{
  path:'home',
  component: HomeComponent,
  canActivate: [AuthGuardService]
},
{
  path:'projects',
  component: ProjectsComponent,
  canActivate: [AuthGuardService]
},
{
  path:'services',
  component: ServicesComponent,
  canActivate: [AuthGuardService]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
