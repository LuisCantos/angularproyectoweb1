import { Component } from '@angular/core';

@Component({
  selector: 'app-request-day-off',
  templateUrl: './request-day-off.component.html',
  styleUrls: ['./request-day-off.component.css']
})
export class RequestDayOffComponent {
  dayOffDate: string = '';
  reason: string = '';

  validateDayOff() {
    if (!this.dayOffDate || !this.reason) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    alert(`Solicitud de día libre enviada para el ${this.dayOffDate} con motivo: ${this.reason}`);
  }
}
