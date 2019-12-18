import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  editedPerson: Person;
  @ViewChild('inputFirstname', {static: false}) firstnameInput: ElementRef;
  @ViewChild('inputLastname', {static: false}) lastnameInput: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personService: PersonService
  ) {

  }

  ngOnInit() {
    let personToEditId = this.activatedRoute.snapshot.params['id'];
    console.log(`lol, personToEditId: ${personToEditId}`);
    this.editedPerson = this.personService.getUserWithId(personToEditId);
    console.log(this.editedPerson);
  }

  onSavePerson(firstname: string, lastname: string) {
    if (firstname != '' && lastname != '') {

      this.editedPerson.firstname = firstname;
      this.editedPerson.lastname = lastname;

      this.firstnameInput.nativeElement.value = '';
      this.lastnameInput.nativeElement.value = '';

      this.personService.putUpdatedUser(this.editedPerson);

      this.router.navigate(['/']);
    } else {

    }
  }

}
