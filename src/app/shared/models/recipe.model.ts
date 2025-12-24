export interface Recipe {
    title?: string;
    recipeParts?: RecipePart[];
    recipeId?: string;
}

export interface RecipePart {
    partType?: RecipePartType,
    title?: string;
    ingredients?: Ingredient[];
    recipePartId?: string;
}

export enum RecipePartType {
    FILLING = 'FILLING',
    DOUGH = 'DOUGH',
    TOPPING = 'TOPPING'
}

export interface Ingredient {
    measurement?: string;
    name?: string;
}