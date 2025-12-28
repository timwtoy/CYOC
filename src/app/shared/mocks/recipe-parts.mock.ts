import { recipeBuilderPart, RecipePartType } from "../models/recipe.model";

export const mockRecipeParts: recipeBuilderPart[] = [{
    partType: RecipePartType.FILLING,
    title: 'Blueberry Compote',
    partTypeId: '0001',
    instructions: `Pour the Blueberries into the pan along with the sugar, salt, and vanilla extract. 
    Turn the heat on to medium and cook the mixture for 10 minutes, stirring every minute or so. 
    In a separate bowl, add 8g corn starch into a bowl along with 30g water and mix until homogenous.
    The blueberry mixture is finished cooking once the sauce has reduced slightly and running a spoon through the sauce leaves a streak before filling back in.
    Once finished, pour the corn starch into the compote, stirring constantly. The compote will thicken immediately, once it has, turn off and remove from heat to let cool.
    When the compote has finished cooling, fill the 1 inch molds with the compote and place in the freezer for at least 4 hours, ideally over night.`,
    ingredientsList: ['16oz Blueberries', '50g sugar', '2g salt', '4.5g vanilla extract', '8g corn starch', '30g water']
},
{
    partType: RecipePartType.DOUGH,
    title: 'Vanilla Cookie',
    partTypeId: '1002',
    instructions: `Place the brown sugar, sugar, salt, baking soda, baking powder, and butter into the stand mixer with a paddle attachment. 
    Start the mixer on low, slowly increasing the mix speed to 6 or medium high speed, scraping off any large chunks of butter that get stuck in the paddle.
    Keep mixing until the mixture is creamed and homogenous. Crack the eggs into a separate small bowl and add the vanilla extract.
    Once the butter sugar mixture is finished, turn off the mixer and scrape down the paddle and sides of the bowl.
    Add 2 of the eggs into the butter sugar mixture and mix on 6 medium high for about 45 seconds.
    Turn off the mixer and scrape the sides of the bowl and add the rest of the egg mix into the bowl. 
    Turn the mixer up to 6 and mix for 3-5 minutes until the mixture is much lighter in color and airy. 
    Turn off the mixer. Add the Flour into the mixture and mix on low for about 1 minute, until the dough has formed.
    Check the bottom of the bowl and make sure there are no unmixed pieces of flour.`,
    ingredientsList: ['200g brown sugar', '100g sugar', '6g salt', '4.5g Baking Soda', '9g Baking Powder', '2 room temp. sticks of butter (226g)',
        '6g vanilla extract', '3 large eggs', '390g AP Flour',]
}, {
    partType: RecipePartType.TOPPING,
    title: 'Butter Crumbs',
    instructions: `Preheat oven to 250F. In a medium sized bowl, pour the sugar, flour, salt, oats, milk powder, and melter butter. Mix together until a wet sand is formed.
    Place a sheet of parchment paper onto a 9x13 pan. Pour the mixture onto the pan and bake for 20-25 minutes, until the crumbs have become a light golden brown color.
    Take out of the oven and let it cool.`,
    ingredientsList: ['50g AP Flour', '50g quick rolled oats', '3g salt', '20g milk powder', '50g sugar', '6tbsp or 85g melted butter'],
}]