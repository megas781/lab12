import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from "../../shared/models/person.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../person.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  // @Output() addperson = new EventEmitter<Person>();
  @ViewChild('inputFirstname', {static: false}) firstnameInput: ElementRef;
  @ViewChild('inputLastname', {static: false}) lastnameInput: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  onAddPerson(firstname: string, lastname: string) {
    if (firstname != '' && lastname != '') {
      let person = new Person(firstname, lastname);
      // this.addperson.emit(person);
      this.personService.createUser(person);

      this.firstnameInput.nativeElement.value = '';
      this.lastnameInput.nativeElement.value = '';

      this.router.navigate(['/']);
    } else {
      //Есть пустые поля. Ничего не делаем
    }
  }

}
