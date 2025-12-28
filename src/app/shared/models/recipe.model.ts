// Model for when the user has finished building their recipe
export interface Recipe {
    title?: string;
    recipeParts?: recipeBuilderPart[];
    recipeId?: string;  // Maybe I can use this in the future to store a user's favorite recipes
}

// The API will return instructions on how to make this part of the recipe
export interface recipeBuilderPart {
    partType?: RecipePartType;
    title?: string;
    partTypeId?: string;
    instructions?: string;
    ingredientsList?: string[];
}

// List of the recipe parts for building a recipe
export interface recipePartList {
    recipePartsList?: RecipePart[];
}

export interface RecipePart {
    name: string;
    recipePartType: RecipePartType;
    partTypeId?: string;
}

export enum RecipePartType {
    FILLING = 'FILLING',
    DOUGH = 'DOUGH',
    TOPPING = 'TOPPING'
}
