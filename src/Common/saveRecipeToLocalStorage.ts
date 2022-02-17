import { RecipeState } from "../Store/store";

const saveRecipeToLocalStorage = (state: RecipeState) => {

    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RecipeState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];

    if (notParsedArr === null) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (parsedArr.length === 0) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (parsedArr.length !== 0) {
        const tmp = parsedArr.findIndex((item: RecipeState) => item.common.RecipeName === state.common.RecipeName)
        if (tmp !== -1) {
            alert('Изменения успешно сохранены')
            parsedArr[tmp] = state
            localStorage.setItem('myRecipes', JSON.stringify(parsedArr));
        }
        else {
            alert('Рецепт успешно добавлен')
            parsedArr.push(state)
            localStorage.setItem('myRecipes', JSON.stringify(parsedArr));
        }

    }
    else {
        alert("Не удалось сохранить рецепт")
    }

}
export default saveRecipeToLocalStorage