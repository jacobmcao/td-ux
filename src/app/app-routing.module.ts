import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AnalystComponent } from './analyst/analyst.component';
import { ConsumerComponent } from './consumer/consumer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'analyst', component: AnalystComponent },
  { path: 'consumer', component: ConsumerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
