import { Component } from '@angular/core';
import { WorkHoursService } from 'src/app/services/work-hours.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  statusMessage = '';

  constructor(private workHoursService: WorkHoursService) {}

  checkIn() {
    const now = new Date();
    const entryTime = now.toLocaleTimeString();
    const entryDate = now.toLocaleDateString();

    this.workHoursService.addWorkHour({
      date: entryDate,
      entry: entryTime,
      exit: '',
      total: 0
    });

    this.statusMessage = `Check-In registrado exitosamente a las ${entryTime}`;
  }

  checkOut() {
    const now = new Date();
    const exitTime = now.toLocaleTimeString();
    const todayDate = now.toLocaleDateString();

    const record = this.workHoursService.getWorkHours().find((r) => r.date === todayDate);

    if (record) {
      record.exit = exitTime;
      record.total = this.calculateTotalHours(record.entry, exitTime);
      this.workHoursService.updateWorkHour(todayDate, record);
      this.statusMessage = `Check-Out registrado exitosamente a las ${exitTime}`;
    } else {
      alert('Por favor, registra primero el Check-In.');
    }
  }

  calculateTotalHours(entryTime: string, exitTime: string): number {
    const entry = new Date(`1970-01-01T${entryTime}`);
    const exit = new Date(`1970-01-01T${exitTime}`);
    return (exit.getTime() - entry.getTime()) / 3600000;
  }

  markBreak() {
    const now = new Date();
    alert(`Descanso registrado a las ${now.toLocaleTimeString()}`);
  }
}
