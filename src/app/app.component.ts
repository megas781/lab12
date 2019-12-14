import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { Person } from './shared/models/person.model';
import {EditPersonModalComponent} from "./edit-person-modal/edit-person-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  lastId = 5; //Откуда? Просто помним про 5 первых добавленных человека
  persons: Person[] = [];
  //Модальное окно
  @ViewChild(EditPersonModalComponent, {static: false}) editModal;

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

  onEditModalSave(personToSave) {
    // console.log('must change here!');
    // console.log(personToSave);
  }

  onEditPerson(personToEdit) {
    this.editModal.showSelf(personToEdit);
    console.log('onEditPerson');
  }

  onDeletePerson(personToDelete) {
    console.log(`do you want to delete?`);
    console.log(personToDelete);
    let index = this.persons.findIndex((value, index, obj) => value.id === personToDelete.id);

    console.log(index);
    if (index !== undefined) { this.persons.splice(index, 1) }
  }

}
