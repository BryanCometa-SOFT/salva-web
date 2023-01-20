//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsComponent } from './us/us.component';
import { ClientComponent } from './client/client.component';
import { InformationComponent } from './information/information.component';
import { ComponentsModule } from './../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    UsComponent,
    ClientComponent,
    InformationComponent
  ],
  imports: [
  CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
