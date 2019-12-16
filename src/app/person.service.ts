import {Injectable, OnInit} from '@angular/core';
import {ajaxGet} from "rxjs/internal-compatibility";
import {Person} from "./shared/models/person.model";
import {PersonFilterPipe} from "./person-filter.pipe";

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit {


  set displayedPersons(value: Person[]) {
    this._storedPersons = value;
  }

  get displayedPersons() {
    // console.log(this._storedPersons);
    if (this.searchString !== '') {
      return new PersonFilterPipe().transform(this._storedPersons, this.searchString);
    } else {
      return this._storedPersons;
    }
  }

  public searchString = '';

  private _storedPersons: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  getUsers() {
    let self = this;
    ajaxGet("http://localhost:3000/users").subscribe(function (ajaxResponse) {
      self._storedPersons = (ajaxResponse.response as Array<Person>).map(function (value, index, array) {
        return new Person(value.firstname, value.lastname, value.id);
      });

    });
  }

  postUpdatedUser(updatedPerson: Person) {

  }
  deleteUser(id: number) {
    console.log(`delete user with id ${id}`);
    let index = this._storedPersons.findIndex((value, index, obj) => value.id === id);
    this._storedPersons.splice(index, 1);
  }

}
