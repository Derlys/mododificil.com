import { Component } from '@angular/core';

@Component({
  selector: 'carousel-interval',
  templateUrl: './carousel-interval.component.html',
})
export class CarouselIntervalComponent {
  myInterval = 5000;
  activeSlideIndex = 0;

  slides = [
    { image: 'assets/images/img-1.jpg' },
    { image: 'assets/images/img-2.jpg' },
    { image: 'assets/images/img-3.jpg' },
    { image: 'assets/images/img-4.jpg' },
    { image: 'assets/images/img-5.jpg' },
    { image: 'assets/images/img-6.jpg' },
  ];
}
