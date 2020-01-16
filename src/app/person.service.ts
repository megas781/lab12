import {Injectable, OnInit} from '@angular/core';
import {ajaxDelete, ajaxGet, ajaxPost, ajaxPut} from "rxjs/internal-compatibility";
import {Person} from "./shared/models/person.model";
import {PersonFilterPipe} from "./person-filter.pipe";

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  lastId: number = null;

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

  public _storedPersons: Person[] = [];

  constructor() {
    console.log('берем?');
    this.getUsers();
    let self = this;
    ajaxGet("http://localhost:3000/metadata").subscribe(function (ajaxResponse) {
      self.lastId = ajaxResponse.response['lastId'];
      console.log(self.lastId);
    });
  }

  getUserWithId(id) {
    return this._storedPersons.find(function (person, index, array) {
      return person.id == id;
    });
  }

  getUsers() {
    let self = this;
    ajaxGet("http://localhost:3000/users").subscribe(function (ajaxResponse) {
      self._storedPersons = (ajaxResponse.response as Array<Person>).map(function (value, index, array) {
        return new Person(value.firstname, value.lastname, value.id);
      });

    });
  }

  createUser(newPerson: Person) {
    console.log(`ajax createUser`);
    let self = this;
    let newPersonId = ++this.lastId;
    newPerson.id = newPersonId;
    console.log(newPerson);

    ajaxPost(`http://localhost:3000/users/`, newPerson, {
      "Content-Type": "application/json"
    }).subscribe(function () {
      self._storedPersons.push(newPerson);
    });
    ajaxPut("http://localhost:3000/metadata/", {lastId: this.lastId}).subscribe(function () {
      console.log(`success put??`);
    });

  }
  putUpdatedUser(updatedPerson: Person) {
    console.log(`ajax put!`);
    console.log(updatedPerson);
    ajaxPut(`http://localhost:3000/users/${updatedPerson.id}`, updatedPerson).subscribe(function (ajaxResponse) {
      console.log(ajaxResponse);
    });
  }
  deleteUser(id: number) {
    console.log(`delete user with id ${id}`);

    let self = this;
    ajaxDelete(`http://localhost:3000/users/${id}`).subscribe(function () {
      let index = self._storedPersons.findIndex((value, index, obj) => value.id === id);
      self._storedPersons.splice(index, 1);
    });

  }

}
