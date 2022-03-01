import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HiComponent } from './hi/hi.component';
import { CiComponent } from './ci/ci.component';
import { LiComponent } from './li/li.component';
import { TwoComponent } from './two/two.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    HiComponent,
    CiComponent,
    LiComponent,
    TwoComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
