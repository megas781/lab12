import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { EditPersonModalComponent } from './edit-person-modal/edit-person-modal.component';
import { PersonFilterPipe } from './person-filter.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import {PersonService} from "./person.service";

//routing
import {Routes, RouterModule} from "@angular/router";
import { AddUserComponent } from './add-user/add-user.component';

// const appRoutes: Routes = [
//   {path: '', component: AppComponent},
//   {path: 'add-user', component: AddUserComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PersonViewComponent,
    PersonAddComponent,
    EditPersonModalComponent,
    PersonFilterPipe,
    SearchBarComponent,
    AddUserComponent
  ],
	imports: [
		BrowserModule,
		FormsModule,
    RouterModule.forRoot([
      {path: '1', component: FirstComponent},
      {path: '2', component: SecondComponent},
      {path: 'add-user', component: AddUserComponent}
    ])
	],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
