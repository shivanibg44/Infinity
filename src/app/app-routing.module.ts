import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HiComponent } from './hi/hi.component';
import { CiComponent } from './ci/ci.component';
import { TwoComponent } from './two/two.component';
import { LiComponent } from './li/li.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [{path:'',component:HomeComponent},
{ path:'navbar',component:NavbarComponent},
{ path:'sidebar',component:SidebarComponent},
{ path:'services',component:ServicesComponent},
{ path:'about',component:AboutComponent},
{ path:'login',component:LoginComponent},
{ path:'register',component:RegisterComponent},
{ path:'footer',component:FooterComponent},
{ path:'ci',component:CiComponent},
{ path:'hi',component:HiComponent},
{ path:'li',component:LiComponent},
{ path:'two',component:TwoComponent},
{ path:'dashboard',component:DashboardComponent},



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
