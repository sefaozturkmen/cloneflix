import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';

import { LoginComponent } from './components/login/login.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [

  
  { path: "", component: FirstpageComponent,pathMatch: 'full'  },
  { path: "home", component: HomepageComponent, canActivate:[LoginGuard]},
  { path: "login", component: LoginComponent},
  { path: '**', component: FirstpageComponent },


  
  { path: '', component: FirstpageComponent},
  { path: 'home', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
