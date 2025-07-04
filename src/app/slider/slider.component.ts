import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
    images: string[] = 
    [
      'Assets/slider1.jpg',
      'Assets/slider2.jpg',
      'Assets/slider3.jpg',
    ]
    currentIndex: number = 0;
    autoSliderInterval!: number;

    ngOnInit(): void
    {
      this.startAutoSlider();
    }
    
    getTransform(): string
    {
      return `translateX(-${this.currentIndex * 100}%)`;
    }
    next(): void
    {
      if (this.currentIndex < this.images.length - 1){
        this.currentIndex++;
      }
      else
      {
        this.reset();
      }
    }
    prev(): void
    {
      if (this.currentIndex > 0){
        this.currentIndex--;
      }
      else
      {
        this.reset();
      }
    }
    reset(): void
    {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      }
      else
      {
        this.currentIndex = 0;
      }
    }
    startAutoSlider(): void
    {
      this.autoSliderInterval = window.setInterval(() => {
        this.next();
      }, 2000); // Change slide every 2 seconds
    }
}
