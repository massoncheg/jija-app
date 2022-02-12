import { RecipeState } from "../Store/store";

const saveRecipeToLocalStorage = (state: RecipeState) => {

    let notParsedArr = localStorage.getItem('myRecipes')
    let ParsedArr: RecipeState[]
    notParsedArr ? ParsedArr = [...JSON.parse(notParsedArr)] : ParsedArr = [];
    
    if (notParsedArr === null) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (ParsedArr.length ===0) {
        localStorage.setItem('myRecipes', JSON.stringify([state]));
    }

    else if (ParsedArr.length !==0) {

        if (ParsedArr.find((item: RecipeState) => item.common.RecipeName === state.common.RecipeName)) {
            alert("Рецепт с таким именем уже существует!")
        }
        else {
            
            ParsedArr.push(state)
            localStorage.setItem('myRecipes', JSON.stringify(ParsedArr));
        }

    }
    else {
        alert("Не удалось сохранить рецепт")
    }
    
}
export default saveRecipeToLocalStorage