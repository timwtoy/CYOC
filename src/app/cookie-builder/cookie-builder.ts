import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecipePartComponent } from './recipe-part/recipe-part';

@Component({
  selector: 'app-cookie-builder',
  imports: [CommonModule, RecipePartComponent],
  standalone: true,
  templateUrl: './cookie-builder.html',
  styleUrl: './cookie-builder.scss'
})
export class CookieBuilder {

}
