import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssloaderService } from '../../cssloader.service';
import { JsloaderService } from '../../jsloader.service';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected to "styleUrls"
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  private styleLinks: HTMLLinkElement[] = [];

  constructor(
    private styleLoader: CssloaderService,
    private scriptLoader: JsloaderService
  ) {}

  ngOnInit(): void {
    // Load CSS files for Theme 1
    this.styleLinks = [
      this.styleLoader.loadStyle('assets/css/animate.min.css'),
      this.styleLoader.loadStyle('assets/css/bootstrap.min.css'),
      this.styleLoader.loadStyle('assets/css/style.css'),
      this.styleLoader.loadStyle('assets/css/icofont.css'),
      this.styleLoader.loadStyle('assets/css/themify-icons.css')
    ];

    // Load JS files for Theme 1
    this.scriptLoader.loadScript('assets/js/jquery.min.js').then(() => {
      return this.scriptLoader.loadScript('assets/js/bootstrap.bundle.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets/js/wow.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets/js/main.js');
    }).then(() => {
      console.log('User JS files loaded');
    }).catch(err => console.error(err));
  }

  ngAfterViewInit(): void {
    // Initialize Owl Carousel after all scripts are loaded
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
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  ngOnDestroy(): void {
    // Unload CSS files when component is destroyed
    this.styleLinks.forEach(link => this.styleLoader.unloadStyle(link));
  }
}
