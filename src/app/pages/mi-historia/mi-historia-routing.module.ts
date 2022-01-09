import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiHistoriaComponent } from './mi-historia.component';

const routes: Routes = [{ path: '', component: MiHistoriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiHistoriaRoutingModule { }
