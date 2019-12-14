import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;

  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson)
  }

}
