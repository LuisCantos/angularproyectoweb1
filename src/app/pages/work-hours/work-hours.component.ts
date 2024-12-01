import { Component, OnInit } from '@angular/core';
import { WorkHoursService } from 'src/app/services/work-hours.service';

@Component({
  selector: 'app-work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.css']
})
export class WorkHoursComponent implements OnInit {
  workHours: any[] = [];
  xmlWorkHours: any[] = [];

  constructor(private workHoursService: WorkHoursService) {}

  ngOnInit() {
    this.workHours = this.workHoursService.getWorkHours();
    this.loadXMLWorkHours();
  }

  loadXMLWorkHours() {
    this.workHoursService.loadXMLWorkHours('assets/work-hours.xml').then((records) => {
      this.xmlWorkHours = records;
    });
  }
}
