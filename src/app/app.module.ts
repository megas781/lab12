import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonViewComponent } from './partial-components/person-view/person-view.component';
import { PersonAddComponent } from './partial-components/person-add/person-add.component';
import { EditPersonModalComponent } from './edit-person-modal/edit-person-modal.component';
import { PersonFilterPipe } from './person-filter.pipe';
import { SearchBarComponent } from './partial-components/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {PersonService} from "./person.service";

//routing
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './pages-lab15/add-user/add-user.component';
import { EditPersonComponent } from './pages-lab15/edit-person/edit-person.component';
import { PersonListComponent } from './pages-lab15/person-list/person-list.component';
import {NotFoundComponent} from "./not-found/not-found.component";

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
      {path: 'edit-user:id', component: EditPersonComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: '**', component: NotFoundComponent}
    ])
	],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
