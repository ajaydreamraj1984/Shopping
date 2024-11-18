import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssloaderService {

  loadStyle(href: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    return link;
  }

  unloadStyle(link: HTMLLinkElement): void {
    document.head.removeChild(link);
  }
}
