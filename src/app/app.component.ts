import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  lastId = 5; //Откуда? Просто помним про 5 первых добавленных человека
  persons: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person('Ivan', 'Ivanov', 1));
    this.persons.push(new Person('Ivan', 'Ivanov', 2));
    this.persons.push(new Person('Ivan', 'Ivanov', 3));
    this.persons.push(new Person('Ivan', 'Ivanov', 4));
    this.persons.push(new Person('Ivan', 'Ivanov', 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = ++this.lastId;

    person.id = newId;
    this.persons.push(person);
  }

  onDeletePerson(personToDelete) {
    console.log(`do you want to delete?`);
    console.log(personToDelete);
    let index = this.persons.findIndex((value, index, obj) => value.id === personToDelete.id);

    console.log(index);
    if (index !== undefined) { this.persons.splice(index, 1) }
  }

}
