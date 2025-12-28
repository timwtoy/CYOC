import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { recipeBuilderPart } from "../models/recipe.model";
import { mockRecipeParts } from "../mocks/recipe-parts.mock";

@Injectable({
    providedIn: 'root'
})
export class RecipeDataService {
    getRecipePart(): Observable<recipeBuilderPart[]> {
        return of(mockRecipeParts);
    }
}