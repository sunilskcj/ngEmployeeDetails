import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: string[] = ['joydip', 'amnil', 'sunil']
  employees = [{
    name: 'Anil', id: 1, salary: 1000, location: 'Chennai'
  }, {
    name: 'Sunil', id: 2, salary: 2000, location: 'Mumbai'
  }, {
    name: 'Joydip', id: 3, salary: 3000, location: 'bangalore'
  }]
 
}
