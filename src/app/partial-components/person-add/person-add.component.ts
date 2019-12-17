import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Person} from '../../shared/models/person.model';
import {ajaxGet} from "rxjs/internal-compatibility";


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  @Output() addperson = new EventEmitter<Person>();

  @ViewChild('inputFirstname', {static: false}) firstnameInput: ElementRef;
  @ViewChild('inputLastname', {static: false}) lastnameInput: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  test(elm) {
    console.log(elm)
  }

  onAddPerson(firstname: string, lastname: string) {
    if (firstname != '' && lastname != '') {
      let person = new Person(firstname, lastname);
      this.addperson.emit(person);

      this.firstnameInput.nativeElement.value = '';
      this.lastnameInput.nativeElement.value = '';
    } else {
      //Есть пустые поля. Ничего не делаем
    }




  }

}
