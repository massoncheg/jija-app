import { RedactorState} from "../Store/Slices/RecipeRedactor/redactorSlice";

const deleteRecipeFromLocalStorage = (name: string) => {

    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RedactorState[]
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