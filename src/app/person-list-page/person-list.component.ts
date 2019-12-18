import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {PersonService} from "../person.service";
import {Person} from "../shared/models/person.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;

  constructor(
    public personService: PersonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onEditPerson(personToEdit: Person) {
    console.log(`personToEdit: ${personToEdit.id}`);
    this.router.navigate(['edit-user', personToEdit.id]);

  }
  onDeletePerson(personToDelete) {
    this.personService.deleteUser(personToDelete.id);
  }
  onType(searchString) {
    this.personService.searchString = searchString;
    // console.log(this.personService.displayedPersons);
  }
}
