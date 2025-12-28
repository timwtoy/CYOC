import { computed, inject, Injectable } from "@angular/core";
import { SignalStore } from "../store/signal-store";
import { recipeBuilderPart, RecipePartType } from "../models/recipe.model";
import { RecipeDataService } from "./recipe.data.service";
import { Nullable } from "../models/nullable.type";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    readonly recipePartsRequest = SignalStore.create<string>(null);
    private readonly recipeDataService = inject(RecipeDataService);
    private readonly recipeServiceResponseStore = SignalStore.getSignal<string, recipeBuilderPart[]>(this.recipePartsRequest, request => {
        return this.recipeDataService.getRecipePart();
    });

    readonly recipeParts = computed<Nullable<recipeBuilderPart[]>>(() => {
        return this.recipeServiceResponseStore.data();
    });

    readonly loading = this.recipeServiceResponseStore.loaded;
    readonly loaded = this.recipeServiceResponseStore.loading;

    fetchRecipeParts(): void {
        this.recipePartsRequest.set('');
    }

    readonly fillingRecipeParts = computed<Nullable<recipeBuilderPart[]>>(() => {
        return this.recipeParts()?.filter(part => {
            return part.partType === RecipePartType.FILLING;
        });
    })
}
