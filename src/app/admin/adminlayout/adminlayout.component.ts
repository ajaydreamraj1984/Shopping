import { Component, OnInit, OnDestroy } from '@angular/core';
import { CssloaderService } from '../../cssloader.service';
import { JsloaderService } from '../../jsloader.service';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [],
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit, OnDestroy {
  private styleLinks: HTMLLinkElement[] = [];

  constructor(
    private styleLoader: CssloaderService,
    private scriptLoader: JsloaderService
  ) {}

  ngOnInit(): void {
    // Load CSS files in the specified order
    this.styleLinks = [
      this.styleLoader.loadStyle('assets2/css/customscroolbar.css'),
      this.styleLoader.loadStyle('assets2/css/style.css'),
      this.styleLoader.loadStyle('assets2/css/style2.css'),
    ];

    // Load JS files in the specified order
    this.scriptLoader.loadScript('assets2/js/jquery.min.js').then(() => {
      return this.scriptLoader.loadScript('assets2/js/jquery-ui.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/popper.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/bootstrap.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/jquery.slimscroll.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/modernizr.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/todo.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets/js/script.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/SmoothScroll.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/pcoded.min.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/demo-12.js');
    }).then(() => {
      return this.scriptLoader.loadScript('assets2/js/jquery.mCustomScrollbar.concat.min.js');
    }).then(() => {
      console.log('All Admin JS files loaded');
    }).catch(err => console.error('Error loading JS files:', err));
  }

  ngOnDestroy(): void {
    // Unload CSS files when component is destroyed
    this.styleLinks.forEach(link => this.styleLoader.unloadStyle(link));
  }
}
