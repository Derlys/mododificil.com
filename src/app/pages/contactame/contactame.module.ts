import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactameRoutingModule } from './contactame-routing.module';
import { ContactameComponent } from './contactame.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactameComponent],
  imports: [CommonModule, ContactameRoutingModule, ReactiveFormsModule],
})
export class ContactameModule {}
