import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonViewComponent } from './person-list-page/person-view/person-view.component';
import { PersonAddComponent } from './ui-elements/person-add/person-add.component';
import { EditPersonModalComponent } from './ui-elements/edit-person-modal/edit-person-modal.component';
import { PersonFilterPipe } from './person-filter.pipe';
import { SearchBarComponent } from './person-list-page/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {PersonService} from "./person.service";

//routing
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './add-user-page/add-user.component';
import { EditPersonComponent } from './edit-person-page/edit-person.component';
import { PersonListComponent } from './person-list-page/person-list.component';
import {NotFoundComponent} from "./not-found-page/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonAddComponent,
    EditPersonModalComponent,
    PersonFilterPipe,
    SearchBarComponent,
    AddUserComponent,
    EditPersonComponent,
    PersonListComponent,
    NotFoundComponent
  ],
	imports: [
		BrowserModule,
		FormsModule,
    RouterModule.forRoot([
      {path: '', component: PersonListComponent},
      {path: 'edit-user/:id', component: EditPersonComponent},
      {path: 'add-user', component: AddUserComponent},
      // {path: '**', component: NotFoundComponent}
    ])
	],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
