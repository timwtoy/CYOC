import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RecipePart, RecipePartType } from "../models/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeDataService {
    getRecipePart(): Observable<RecipePart[]> {
        return of(mockRecipeParts);
    }
}

export const mockRecipeParts: RecipePart[] = [{
    partType: RecipePartType.FILLING,
    title: 'Blueberry Compote',
    ingredients: [],
    recipePartId: '1'
},
{
    partType: RecipePartType.FILLING,
    title: 'Chocolate Fudge',
    ingredients: [],
    recipePartId: '2'
}, {
    partType: RecipePartType.DOUGH,
    title: 'Vanila Cookie',
    ingredients: [],
    recipePartId: '1'
}]