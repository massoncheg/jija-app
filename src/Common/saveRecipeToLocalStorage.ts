import { current } from "@reduxjs/toolkit";
import { RedactorState } from "../Store/Slices/RecipeRedactor/redactorSlice";
import { store } from "../Store/store";

const saveRecipeToLocalStorage = () => {

    let state: RedactorState

    state = store.getState().redactor

    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RedactorState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];

    if (notParsedArr === null) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (parsedArr.length === 0) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (parsedArr.length !== 0) {
        const tmp = parsedArr.findIndex((item: RedactorState) => item.common.RecipeName === state.common.RecipeName)
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