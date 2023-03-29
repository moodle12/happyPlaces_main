import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlacesComponent } from './places/places.component';
import { DashboardComponent } from './admin/dash/dashboard/dashboard.component';
import { HomeComponent } from './customer/home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HeaderComponent } from './admin/dash/header/header.component';
import { SidebarComponent } from './admin/dash/sidebar/sidebar.component';
import { FooterComponent } from './admin/dash/footer/footer.component';
import { ContentComponent } from './admin/dash/content/content.component';
import { ListusersComponent } from './admin/listing/listusers/listusers.component';
import { LogoutComponent } from './logout/logout.component';
import { AdduserComponent } from './admin/adding/adduser/adduser.component';
import { DataTablesModule } from 'angular-datatables';
import { ListPlacesComponent } from './admin/listing/list-places/list-places.component';
import { AddPlacesComponent } from './admin/adding/add-places/add-places.component';
import { EdituserComponent } from './admin/editing/edituser/edituser.component';
import { ToastrModule } from 'ngx-toastr';
import { EditplaceComponent } from './admin/editing/editplace/editplace.component';
import { ListactivitiesComponent } from './admin/listing/listactivities/listactivities.component';
import { AddactivitiesComponent } from './admin/adding/addactivities/addactivities.component';
import { EditactivityComponent } from './admin/editing/editactivity/editactivity.component';
import { ListbookingsComponent } from './admin/listing/listbookings/listbookings.component';
import { AddbookingsComponent } from './admin/adding/addbookings/addbookings.component';
import { EditbookingComponent } from './admin/editing/editbooking/editbooking.component';
import { ListpostsComponent } from './admin/listing/listposts/listposts.component';
import { AddpostsComponent } from './admin/adding/addposts/addposts.component';
import { EditpostComponent } from './admin/editing/editpost/editpost.component';
import { ListfeedbacksComponent } from './admin/listing/listfeedbacks/listfeedbacks.component';
import { AddfeedbackComponent } from './admin/adding/addfeedback/addfeedback.component';
import { EditfeedbackComponent } from './admin/editing/editfeedback/editfeedback.component';
import { ListvendorsComponent } from './admin/listing/listvendors/listvendors.component';
import { AddvendorComponent } from './admin/adding/addvendor/addvendor.component';
import { EditvendorComponent } from './admin/editing/editvendor/editvendor.component';
import { VdashboardComponent } from './vendor/vdashboard/vdashboard.component';
import { ToursComponent } from './customer/tours/tours.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { BookingsreportComponent } from './admin/bookingsreport/bookingsreport.component';
import { AboutusComponent } from './customer/aboutus/aboutus.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { PostComponent } from './customer/post/post.component';
import { BookingComponent } from './customer/booking/booking.component';
import { VsidebarComponent } from './vendor/vsidebar/vsidebar.component';
import { VcontentComponent } from './vendor/vcontent/vcontent.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PlacesComponent,
    DashboardComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ListusersComponent,
    LogoutComponent,
    AdduserComponent,
    ListPlacesComponent,
    AddPlacesComponent,
   ListPlacesComponent,
   EdituserComponent,
   EditplaceComponent,
   ListactivitiesComponent,
   AddactivitiesComponent,
   EditactivityComponent,
   ListbookingsComponent,
   AddbookingsComponent,
   EditbookingComponent,
   ListpostsComponent,
   AddpostsComponent,
   EditpostComponent,
   ListfeedbacksComponent,
   AddfeedbackComponent,
   EditfeedbackComponent,
   ListvendorsComponent,
   AddvendorComponent,
   EditvendorComponent,
   VdashboardComponent,
   ToursComponent,
   ReportsComponent,
   BookingsreportComponent,
   AboutusComponent,
   ProfileComponent,
   PostComponent,
   BookingComponent,
   VsidebarComponent,
   VcontentComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
