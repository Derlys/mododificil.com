import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactameComponent } from './contactame.component';

const routes: Routes = [{ path: '', component: ContactameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactameRoutingModule { }
