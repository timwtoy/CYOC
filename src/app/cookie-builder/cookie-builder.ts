import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Finder } from './finder/finder';

@Component({
  selector: 'app-cookie-builder',
  imports: [CommonModule, Finder],
  standalone: true,
  templateUrl: './cookie-builder.html',
  styleUrl: './cookie-builder.scss'
})
export class CookieBuilder {

}
