import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HelpComponent } from './pages/help/help.component';
import { RequestDayOffComponent } from './pages/request-day-off/request-day-off.component';
import { WorkHoursComponent } from './pages/work-hours/work-hours.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AttendanceComponent,
    HelpComponent,
    RequestDayOffComponent,
    WorkHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
