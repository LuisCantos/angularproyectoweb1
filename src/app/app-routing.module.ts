import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HelpComponent } from './pages/help/help.component';
import { RequestDayOffComponent } from './pages/request-day-off/request-day-off.component';
import { WorkHoursComponent } from './pages/work-hours/work-hours.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'help', component: HelpComponent },
  { path: 'request-day-off', component: RequestDayOffComponent },
  { path: 'work-hours', component: WorkHoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
