import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListsPageComponent } from './lists-page/lists-page.component';

const routes: Routes = [
  {path: "my-lists", component: ListsPageComponent},
  {path: "", component: LoginComponent},
  {path: "register", component: RegistrationComponent},
  {path: "my-groups", component: MyGroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
