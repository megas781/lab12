import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";

@Component({
  selector: 'app-edit-person-modal',
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.css']
})
export class EditPersonModalComponent implements OnInit {
  @ViewChild('firstnameModalInput', {static: false}) firstnameModalInput: ElementRef;
  @ViewChild('lastnameModalInput', {static: false}) lastnameModalInput: ElementRef;

  @Output('onModalSave') saveEventEmitter = new EventEmitter();

  private hidden = true; //будет true
  @Input() person: Person;

  constructor() {
  }
  ngOnInit(): void {

  }

  showSelf(person: Person): void {
    this.hidden = false;
    this.person = person;
    this.firstnameModalInput.nativeElement.value = this.person.firstname;
    this.lastnameModalInput.nativeElement.value = this.person.lastname;
  }
  hideSelf() {
    this.hidden = true;
    this.person = null;
    this.firstnameModalInput.nativeElement.value = '';
    this.lastnameModalInput.nativeElement.value = '';
  }

  //Event Handlers
  onSave() {
    if (this.firstnameModalInput.nativeElement.value != '' && this.lastnameModalInput.nativeElement.value != '') {
      //как-то нада изменить
      this.person.firstname = this.firstnameModalInput.nativeElement.value;
      this.person.lastname = this.lastnameModalInput.nativeElement.value;

      this.saveEventEmitter.emit(this.person);
      this.hideSelf()
    } else {
      //ничего не делаем. Нужны заполненные поля!
    }
  }
  onCancel() {
    this.hideSelf();
    this.firstnameModalInput.nativeElement.value = '';
    this.lastnameModalInput.nativeElement.value = '';
  }
}
