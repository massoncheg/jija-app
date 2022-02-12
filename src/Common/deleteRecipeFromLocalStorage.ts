import { RecipeState } from "../Store/store";

const deleteRecipeFromLocalStorage = (name: string) => {

    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RecipeState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];

    if (parsedArr.length !== 0) {

        parsedArr.splice(parsedArr.findIndex((item) => item.common.RecipeName === name), 1)
        localStorage.setItem('myRecipes', JSON.stringify(parsedArr));
    }
    else {
        alert("Не удалось удалить рецепт")
    }

}
export default deleteRecipeFromLocalStorage