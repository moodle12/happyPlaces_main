import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlacesComponent } from './admin/adding/add-places/add-places.component';
import { AddactivitiesComponent } from './admin/adding/addactivities/addactivities.component';
import { AddbookingsComponent } from './admin/adding/addbookings/addbookings.component';
import { AddfeedbackComponent } from './admin/adding/addfeedback/addfeedback.component';
import { AddpostsComponent } from './admin/adding/addposts/addposts.component';
import { AdduserComponent } from './admin/adding/adduser/adduser.component';
import { AddvendorComponent } from './admin/adding/addvendor/addvendor.component';
import { BookingsreportComponent } from './admin/bookingsreport/bookingsreport.component';
import { DashboardComponent } from './admin/dash/dashboard/dashboard.component';
import { EditactivityComponent } from './admin/editing/editactivity/editactivity.component';
import { EditbookingComponent } from './admin/editing/editbooking/editbooking.component';
import { EditplaceComponent } from './admin/editing/editplace/editplace.component';
import { EditpostComponent } from './admin/editing/editpost/editpost.component';
import { EdituserComponent } from './admin/editing/edituser/edituser.component';
import { EditvendorComponent } from './admin/editing/editvendor/editvendor.component';
import { ListPlacesComponent } from './admin/listing/list-places/list-places.component';
import { ListactivitiesComponent } from './admin/listing/listactivities/listactivities.component';
import { ListbookingsComponent } from './admin/listing/listbookings/listbookings.component';
import { ListfeedbacksComponent } from './admin/listing/listfeedbacks/listfeedbacks.component';
import { ListpostsComponent } from './admin/listing/listposts/listposts.component';
import { ListusersComponent } from './admin/listing/listusers/listusers.component';
import { ListvendorsComponent } from './admin/listing/listvendors/listvendors.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { AboutusComponent } from './customer/aboutus/aboutus.component';
import { BookingComponent } from './customer/booking/booking.component';
import { HomeComponent } from './customer/home/home.component';
import { PostComponent } from './customer/post/post.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { ToursComponent } from './customer/tours/tours.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlacesComponent } from './places/places.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';
import { VdashboardComponent } from './vendor/vdashboard/vdashboard.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"places",component:PlacesComponent},
  {path:"customer/home",component:HomeComponent},
  {path:"forgetPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"logout",component:LogoutComponent},

  {
    path:"admin",children:[
      {path:"adduser",component:AdduserComponent},
      {path:"reports",component:ReportsComponent},
      {path:"bookingreports",component:BookingsreportComponent},
      {path:"listusers",component:ListusersComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"listplaces",component:ListPlacesComponent},
      {path:"addplaces",component:AddPlacesComponent},
      {path:"edituser/:userid",component:EdituserComponent},
      {path:"editplace/:placeid",component:EditplaceComponent},
      {path:"listactivities",component:ListactivitiesComponent},
      {path:"addactivities",component:AddactivitiesComponent},
      {path:"editactivity/:activityId",component:EditactivityComponent},
      {path:"listbookings",component:ListbookingsComponent},
      {path:"addbookings",component:AddbookingsComponent},
      {path:"editbooking/:bookingid",component:EditbookingComponent},
      {path:"listposts",component:ListpostsComponent},
      {path:"addposts",component:AddpostsComponent},
      {path:"editpost/:postId",component:EditpostComponent},
      {path:"listvendors",component:ListvendorsComponent},
      {path:"addvendor",component:AddvendorComponent},
      {path:"editvendor/:businessId",component:EditvendorComponent},
      {path:"listfeedbacks",component:ListfeedbacksComponent},
      {path:"addfeedback",component:AddfeedbackComponent}
    ],canActivate:[LoginGuard]
  },
  {path:"vendor/dashboard",component:VdashboardComponent},
  {path:"customer/tours",component:ToursComponent},
  {path:"customer/aboutus",component:AboutusComponent},
  {path:"customer/booking",component:BookingComponent},
  {path:"customer/post",component:PostComponent},
  {path:"customer/profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
