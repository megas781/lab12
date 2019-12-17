import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Output('editPerson') editPersonEventEmitter = new EventEmitter();
  @Output('deletePerson') deleteButtonEventEmitter = new EventEmitter();
  @Input() inPerson: Person;

  // displayedPersons = [];

  constructor() { }

  ngOnInit() {

  }

}
