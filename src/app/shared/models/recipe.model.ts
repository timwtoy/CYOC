export interface Recipe {
    title?: string;
    recipeParts?: RecipePart[];
}

export interface RecipePart {
    partType?: RecipePartType,
    title?: string;
    ingredients?: Ingredient[];
}

export enum RecipePartType {
    FILLED = `filled`,
    STANDARD = `standard`
}

export interface Ingredient {
    measurement?: string;
    name?: string;
}