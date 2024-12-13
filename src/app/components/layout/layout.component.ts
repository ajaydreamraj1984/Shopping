import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
//import { RouterLink, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-layout',
  standalone: true,
  //imports: [RouterOutlet, RouterLink],
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
