import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


declare var $: any;


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements   AfterViewInit{

  ngAfterViewInit(): void {
    // Initialize Owl Carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      loop: true,
      center: true,
      dots: false,
      nav: true,
      
      
      autoplayTimeout: 5000,
       
      items: 3,
      navText: [
        ' <i class="bi bi-chevron-left"></i></div>', 
        ' <i class="bi bi-chevron-right"></i>'
      ], responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
    });
  }
 
}
