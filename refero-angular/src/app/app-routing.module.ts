import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { GroupsComponent } from "./groups/groups.component";
import { ListsPageComponent } from "./lists-page/lists-page.component";

import { AdminHomeComponent } from "./admin-home/admin-home.component";

const routes: Routes = [{ path: "admin-home", component: AdminHomeComponent }];
const routes: Routes = [
  { path: "my-lists", component: ListsPageComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "my-groups", component: GroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
