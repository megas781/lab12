import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchBarComponent} from "../../partial-components/search-bar/search-bar.component";
import {PersonService} from "../../person.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @ViewChild(SearchBarComponent, {static: false}) searchBar: SearchBarComponent;

  constructor(
    public personService: PersonService
  ) { }

  ngOnInit() {
  }

  onDeletePerson(personToDelete) {
    this.personService.deleteUser(personToDelete.id);
  }
  onType(searchString) {
    this.personService.searchString = searchString;
    // console.log(this.personService.displayedPersons);
  }
}
