import { Component, OnInit } from '@angular/core';
interface CarouselItem {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselItems: CarouselItem[] = [
    { src: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Image 1' },
    { src: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', alt: 'Image 2' },
    { src: 'https://images.unsplash.com/photo-1495031451303-d8ab59c8df37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', alt: 'Image 3' }
  ];
  activeIndex = 0;
  nextIndex = 1;
  prevIndex = this.carouselItems.length - 1;
  isSliding = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide(): void {
    if (this.isSliding) {
      return;
    }
    this.isSliding = true;
    this.prevIndex = this.activeIndex;
    this.activeIndex = this.nextIndex;
    this.nextIndex = (this.nextIndex + 1) % this.carouselItems.length;
    setTimeout(() => {
      this.isSliding = false;
    }, 600);
  }

  prevSlide(): void {
    if (this.isSliding) {
      return;
    }
    this.isSliding = true;
    this.nextIndex = this.activeIndex;
    this.activeIndex = this.prevIndex;
    this.prevIndex = (this.prevIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    setTimeout(() => {
      this.isSliding = false;
    }, 600);
  }

}
