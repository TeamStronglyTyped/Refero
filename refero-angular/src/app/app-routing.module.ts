import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { GroupsComponent } from "./groups/groups.component";
import { ListsPageComponent } from "./lists-page/lists-page.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { BannedUsersComponent } from "./banned-users/banned-users.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { AllListsComponent } from "./all-lists/all-lists.component";

const routes: Routes = [
  { path: "my-lists", component: ListsPageComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "my-groups", component: GroupsComponent },
  { path: "admin-home", component: AdminHomeComponent },
  { path: "admin-home/banned-users", component: BannedUsersComponent },
  { path: "admin-home/all-users", component: AllUsersComponent },
  { path: "admin-home/all-lists", component: AllListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
