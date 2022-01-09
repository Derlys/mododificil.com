import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiHistoriaRoutingModule } from './mi-historia-routing.module';
import { MiHistoriaComponent } from './mi-historia.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [MiHistoriaComponent],
  imports: [CommonModule, MiHistoriaRoutingModule, MarkdownModule],
})
export class MiHistoriaModule {}
