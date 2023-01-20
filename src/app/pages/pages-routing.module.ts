//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClientComponent } from './client/client.component';
import { InformationComponent } from './information/information.component';
import { UsComponent } from './us/us.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'nosotros', component: UsComponent },
      { path: 'informacion', component: InformationComponent },
      { path: 'clientes', component: ClientComponent },
      { path: 'contacto', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class PagesRoutingModule { }
