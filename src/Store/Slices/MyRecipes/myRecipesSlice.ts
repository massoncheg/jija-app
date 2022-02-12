import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import deleteRecipeFromLocalStorage from '../../../Common/deleteRecipeFromLocalStorage';
import { iDBFlavoring } from '../../../Components/RecipeRedactor/Components/FlavoringsSelect/FlavoringsSearch';
import { RecipeState } from '../../store';
import { DescriptionState } from '../RecipeRedactor/descriptionSlice';

export interface SavedRecipeItem {
    name: string,
    description: DescriptionState

}

export interface MyRecipesState {
    savedRecipes: SavedRecipeItem[];
}

const getRecipes = () => {
    let notParsedArr = localStorage.getItem('myRecipes')
    let parsedArr: RecipeState[]
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];
    if (parsedArr.length !== 0) {

        return parsedArr.map((item: RecipeState) => ({ name: item.common.RecipeName, description: item.description }))
    }
    else { return [] }

}

const initialState: MyRecipesState = {
    savedRecipes: getRecipes(),
}

export const myRecipesSlice = createSlice({
    name: 'myRecipes',
    initialState: initialState,
    reducers: {
        handleRecipeAdd: (state, action: PayloadAction<RecipeState>) => {

            if (!current(state.savedRecipes).find((item: SavedRecipeItem) => item.name === action.payload.common.RecipeName)) {
                const recipe: SavedRecipeItem = {
                    name: action.payload.common.RecipeName,
                    description: action.payload.description
                }
                state.savedRecipes.push(recipe)
            }

        },
        handleRecipeDelete: (state, action: PayloadAction<string>) => {

            let tmpArr = [...current(state.savedRecipes)]
            tmpArr.splice(state.savedRecipes.findIndex((item) => item.name === action.payload), 1);
            state.savedRecipes = tmpArr;
            deleteRecipeFromLocalStorage(action.payload);

        },
        handleLibraryClear: (state) => {
            localStorage.clear();
            state.savedRecipes = [];
        }
    }
})
export const { handleRecipeAdd, handleRecipeDelete, handleLibraryClear

} = myRecipesSlice.actions

export default myRecipesSlice.reducer
