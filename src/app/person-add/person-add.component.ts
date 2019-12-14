import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  test(elm) {
    console.log(elm)
  }

  onAddPerson(firstname: string, lastname: string) {
    let person = new Person(firstname, lastname);
    this.addperson.emit(person);
  }

}
