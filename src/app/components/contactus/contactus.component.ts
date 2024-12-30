import { Component, OnDestroy, OnInit } from '@angular/core';
import { CssloaderService } from '../../cssloader.service';
import { JsloaderService } from '../../jsloader.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit, OnDestroy{
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



  ngOnDestroy(): void {
    // Unload CSS files when component is destroyed
    this.styleLinks.forEach(link => this.styleLoader.unloadStyle(link));
  }
}
