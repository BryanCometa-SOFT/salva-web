//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarWhiteComponent } from './navbar-white/navbar-white.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarWhiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarWhiteComponent
  ]
})
export class ComponentsModule { }
