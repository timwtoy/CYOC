import { Component, computed, OnInit } from '@angular/core';
import { RecipePart, RecipePartType } from '../../shared/models/recipe.model';
import { Dropdown } from '../../shared/dropdown/dropdown';

@Component({
  selector: 'app-recipe-part',
  imports: [Dropdown],
  standalone: true,
  templateUrl: './recipe-part.html',
  styleUrl: './recipe-part.scss'
})
export class RecipePartComponent implements OnInit {
  recipeParts: RecipePart[] = []
  filterValue: string = ``;

  ngOnInit(): void {
    this.recipeParts = this.recipePartsList();
  }

  recipePartsList = computed<RecipePart[]>(() => {
    return [{
      partType: RecipePartType.STANDARD,
      title: 'Blueberry compote',
      ingredients: [
        {
          measurement: `200g`,
          name: 'Blueberry'
        },
        {
          measurement: `100g`,
          name: `sugar`
        }
      ]
    }, {
      partType: RecipePartType.FILLED,
      title: 'Raspberry compote',
      ingredients: [
        {
          measurement: `200g`,
          name: 'Raspberry'
        },
        {
          measurement: `100g`,
          name: `sugar`
        }
      ]
    }
    ];
  });
}
