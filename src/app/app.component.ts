import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [LayoutComponent,RouterOutlet],
=======
  imports: [LayoutComponent, RouterOutlet],
>>>>>>> Addfolder
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eccomerceproject-A';
}
