import { RecipeState } from "../Store/store";

const loadRecipeFromLocalStorage = (name: string) => {


    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RecipeState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];
    if (parsedArr.length !== 0) {

        return parsedArr.find((item: RecipeState) => item.common.RecipeName === name)
    }
    else { alert("Не удалось загрузить рецепт") 
        return undefined}


}
export default loadRecipeFromLocalStorage