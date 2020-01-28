import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GroupsComponent } from './groups/groups.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { PendingGroupsComponent } from './pending-groups/pending-groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { BannedUsersComponent } from './banned-users/banned-users.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroupSideNavComponent } from './group-side-nav/group-side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    AdminHomeComponent,
    AllUsersComponent,
    BannedUsersComponent,
    AllListsComponent,
    ListItemComponent,
    ListComponent,
    LoginComponent,
    RegistrationComponent,
    GroupsComponent,
    ListsPageComponent,
    PendingGroupsComponent,
    CreateGroupComponent,
    MyGroupsComponent,
    GroupSideNavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
