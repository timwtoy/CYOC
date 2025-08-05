import { Component, computed, OnInit } from '@angular/core';
import { RecipePart, RecipePartType } from '../../shared/models/recipe.model';
import { Dropdown } from '../../shared/dropdown/dropdown';

@Component({
  selector: 'app-finder',
  imports: [Dropdown],
  standalone: true,
  templateUrl: './finder.html',
  styleUrl: './finder.scss'
})
export class Finder implements OnInit {
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
