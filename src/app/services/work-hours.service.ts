import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkHoursService {
  private workHours: any[] = [];

  constructor() {
    this.loadWorkHours();
  }

  private loadWorkHours() {
    const storedWorkHours = localStorage.getItem('workHours');
    if (storedWorkHours) {
      this.workHours = JSON.parse(storedWorkHours);
    }
  }

  private saveWorkHours() {
    localStorage.setItem('workHours', JSON.stringify(this.workHours));
  }

  getWorkHours() {
    return this.workHours;
  }

  addWorkHour(record: any) {
    this.workHours.push(record);
    this.saveWorkHours();
  }

  updateWorkHour(date: string, updatedRecord: any) {
    const index = this.workHours.findIndex((record) => record.date === date);
    if (index !== -1) {
      this.workHours[index] = updatedRecord;
      this.saveWorkHours();
    }
  }

  loadXMLWorkHours(xmlUrl: string): Promise<any> {
    return fetch(xmlUrl)
      .then((response) => response.text())
      .then((xmlText) => new DOMParser().parseFromString(xmlText, 'application/xml'))
      .then((xmlDoc) => {
        const entries = xmlDoc.getElementsByTagName('entry');
        const records = [];
        for (let i = 0; i < entries.length; i++) {
          records.push({
            date: entries[i].getElementsByTagName('date')[0].textContent,
            entryTime: entries[i].getElementsByTagName('entryTime')[0].textContent,
            exitTime: entries[i].getElementsByTagName('exitTime')[0].textContent,
            totalHours: entries[i].getElementsByTagName('totalHours')[0].textContent
          });
        }
        return records;
      });
  }
}
