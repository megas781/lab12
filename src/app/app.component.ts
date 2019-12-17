import {Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Inject} from '@angular/core';
import { Person } from './shared/models/person.model';
import {EditPersonModalComponent} from "./edit-person-modal/edit-person-modal.component";
import {SearchBarComponent} from "./partial-components/search-bar/search-bar.component";
import {PersonFilterPipe} from "./person-filter.pipe";
import {PersonService} from "./person.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Компоненты';
  // lastId: number = null; //Откуда? Просто помним про 5 первых добавленных человека
  //Модальное окно


  constructor(
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }


  // onAddPerson(person: Person) {
  //   this.personService.createUser(person);
  // }

  // onEditModalSave(personToSave) {
  //   this.personService.putUpdatedUser(personToSave)
  // }

  // onEditPerson(personToEdit) {
  //   this.editModal.showSelf(personToEdit);
  // }


}
