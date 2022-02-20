import { RedactorState} from "../Store/Slices/RecipeRedactor/redactorSlice";;

const loadRecipeFromLocalStorage = (name: string) => {


    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RedactorState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];
    if (parsedArr.length !== 0) {

        return parsedArr.find((item: RedactorState) => item.common.RecipeName === name)
    }
    else { alert("Не удалось загрузить рецепт") 
        return undefined}


}
export default loadRecipeFromLocalStorage