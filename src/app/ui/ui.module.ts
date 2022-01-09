import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { CarouselIntervalComponent } from './carousel-interval.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselIntervalComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, CarouselModule.forRoot()],
})
export class UiModule {}
