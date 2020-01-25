import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminHomeComponent } from "./admin-home/admin-home.component";

const routes: Routes = [{ path: "admin-home", component: AdminHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
