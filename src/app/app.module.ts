import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HiComponent } from './hi/hi.component';
import { CiComponent } from './ci/ci.component';
import { LiComponent } from './li/li.component';
import { TwoComponent } from './two/two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { NewPolicyComponent } from './new-policy/new-policy.component';
import { MypolicyComponent } from './mypolicy/mypolicy.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HiComponent,
    CiComponent,
    LiComponent,
    TwoComponent,
    DashboardComponent,
    PolicyDetailsComponent,
    NewPolicyComponent,
    MypolicyComponent
   

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
