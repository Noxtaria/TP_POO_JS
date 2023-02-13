import { recipes } from "./recipes";
const recipesList = [];
for (const key in recipes) {
    recipesList.push(Object.assign({ id: key }, recipes[key]));
}
