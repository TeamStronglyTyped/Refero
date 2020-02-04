import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { GroupsComponent } from "./groups/groups.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { ListComponent } from "./list/list.component";
import { ListsPageComponent } from "./lists-page/lists-page.component";
import { PendingGroupsComponent } from "./pending-groups/pending-groups.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { MyGroupsComponent } from "./my-groups/my-groups.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { BannedUsersComponent } from "./banned-users/banned-users.component";
import { AllListsComponent } from "./all-lists/all-lists.component";
import { UsersService } from "./users.service";
import { NgModule } from "@angular/core";
import { GroupSideNavComponent } from "./group-side-nav/group-side-nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AccountComponent } from "./account/account.component";
import { LogoutComponent } from "./logout/logout.component";
import { ListSideNavComponent } from "./list-side-nav/list-side-nav.component";
import { NavValuesService } from "./nav-values.service";
import { AdminLogInComponent } from "./admin-log-in/admin-log-in.component";

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
    GroupSideNavComponent,
    AccountComponent,
    LogoutComponent,
    ListSideNavComponent,
    AdminLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, NavValuesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
