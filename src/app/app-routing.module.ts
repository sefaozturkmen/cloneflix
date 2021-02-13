import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: "", component: FirstpageComponent },
  { path: "home", component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
