import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Output('deletePerson') deleteButtonEventEmitter = new EventEmitter();

  @Input() inPerson: Person;

  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson)
  }

}
