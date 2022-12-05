
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ChatsComponent } from './chats/chats.component';
const routes: Routes = [
  {path:'view-profile',component:ViewProfileComponent},
{ path:'events',component:EventsComponent},
{path:'gallery',component:GalleryComponent},
{path:'login',component:LoginComponent},
{path: 'registration' ,component:RegistrationComponent},
{path: 'career',component:CareerComponent},
{path: 'chats',component:ChatsComponent},
{path:  'chats/:id',component:ChatsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
