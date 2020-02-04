import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { GroupsComponent } from "./groups/groups.component";
import { AccountComponent } from "./account/account.component";
import { MyGroupsComponent } from "./my-groups/my-groups.component";
import { ListsPageComponent } from "./lists-page/lists-page.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { BannedUsersComponent } from "./banned-users/banned-users.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { AllListsComponent } from "./all-lists/all-lists.component";
import { PendingGroupsComponent } from "./pending-groups/pending-groups.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { LogoutComponent } from "./logout/logout.component";
import { AdminLogInComponent } from "./admin-log-in/admin-log-in.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "my-lists", component: ListsPageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "groups", component: GroupsComponent },
  { path: "account", component: AccountComponent },
  { path: "my-groups", component: MyGroupsComponent },
  { path: "pending-groups", component: PendingGroupsComponent },
  { path: "create-group", component: CreateGroupComponent },
  { path: "admin-home", component: AdminHomeComponent },
  { path: "admin-home/banned-users", component: BannedUsersComponent },
  { path: "admin-home/all-users", component: AllUsersComponent },
  { path: "admin-home/all-lists", component: AllListsComponent },
  { path: "adminLogIn", component: AdminLogInComponent },
  { path: "logout", component: LogoutComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
