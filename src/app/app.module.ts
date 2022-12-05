import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { PostService } from './service/post.service';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ChatsComponent } from './chats/chats.component';








@NgModule({
  declarations: [

    AppComponent,
    ViewProfileComponent,
    FooterComponent,
    NavbarComponent,
    EventsComponent,
    GalleryComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CareerComponent,
    UpdatePasswordComponent,
    ChatsComponent


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers: [PostService,
  LoginServiceService,ChatsComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
