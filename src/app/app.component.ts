import {Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Person } from './shared/models/person.model';
import {EditPersonModalComponent} from "./edit-person-modal/edit-person-modal.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {PersonFilterPipe} from "./person-filter.pipe";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Компоненты';
  lastId = 5; //Откуда? Просто помним про 5 первых добавленных человека

  private searchString: string = '';
  private _storedPersons: Person[] = [];
  public persons: Person[] = new PersonFilterPipe().transform(this._storedPersons,this.searchString);
  //Модальное окно
  @ViewChild(EditPersonModalComponent, {static: false}) editModal;
  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;


  constructor() {
  }

  ngOnInit(): void {
    this._storedPersons.push(new Person('Ivan', 'Ivanov', 1));
    this._storedPersons.push(new Person('Ivan', 'Ivanov', 2));
    this._storedPersons.push(new Person('Gleb', 'Ivanov', 3));
    this._storedPersons.push(new Person('Glem', 'Ivanov', 4));
    this._storedPersons.push(new Person('Ivan', 'Ivanov', 5));
  }

  ngAfterViewInit(): void {
    console.log(this.searchBar);
  }


  onAddPerson(person: Person) {
    let newId = ++this.lastId;

    person.id = newId;
    this._storedPersons.push(person);
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
    let index = this._storedPersons.findIndex((value, index, obj) => value.id === personToDelete.id);

    console.log(index);
    if (index !== undefined) { this._storedPersons.splice(index, 1) }
  }

  onType(searchString) {
    console.log(searchString);
    this.persons = new PersonFilterPipe().transform(this._storedPersons, searchString);
  }

}
