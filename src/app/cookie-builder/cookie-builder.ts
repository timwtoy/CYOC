import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RecipePartComponent } from './recipe-part/recipe-part';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-cookie-builder',
  imports: [CommonModule, RecipePartComponent],
  standalone: true,
  templateUrl: './cookie-builder.html',
  styleUrl: './cookie-builder.scss'
})
export class CookieBuilder {
  recipeService = inject(RecipeService);

  recipeParts = this.recipeService.fetchRecipeParts();
  isLoading = this.recipeService.loading;

}
