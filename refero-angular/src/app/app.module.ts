import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { BannedUsersComponent } from './banned-users/banned-users.component';
import { AllListsComponent } from './all-lists/all-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    AdminHomeComponent,
    AllUsersComponent,
    BannedUsersComponent,
    AllListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
