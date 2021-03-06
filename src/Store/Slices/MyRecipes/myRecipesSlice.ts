import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import deleteRecipeFromLocalStorage from '../../../Common/deleteRecipeFromLocalStorage';
import { DataBaseFlavoring } from '../../../Components/RecipeRedactor/Components/FlavoringsSelect/FlavoringsSearch';
import { RedactorState } from '../../Slices/RecipeRedactor/redactorSlice';
import { DescriptionState } from '../RecipeRedactor/redactorSlice';

export interface SavedRecipeItem {
    name: string,
    description: DescriptionState

}

export interface MyRecipesState {
    savedRecipes: SavedRecipeItem[];
}

const getRecipes = () => {
    let notParsedArr = localStorage.getItem('myRecipes');
    let parsedArr: RedactorState[];
    notParsedArr ? parsedArr = [...JSON.parse(notParsedArr)] : parsedArr = [];
    if (parsedArr.length !== 0) {

        return parsedArr.map((item: RedactorState) => ({ name: item.common.RecipeName, description: item.description }))
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
        handleRecipeAdd: (state, action: PayloadAction<RedactorState>) => {

            const isRecipeSavedIndex = current(state.savedRecipes).findIndex((item: SavedRecipeItem) => item.name === action.payload.common.RecipeName);

            if (isRecipeSavedIndex === -1) {
                const recipe: SavedRecipeItem = {
                    name: action.payload.common.RecipeName,
                    description: action.payload.description
                }
                state.savedRecipes.push(recipe)
            }
            else if (isRecipeSavedIndex !== -1) {
                const recipe: SavedRecipeItem = {
                    name: action.payload.common.RecipeName,
                    description: action.payload.description
                }
                let tmpArr = [...current(state.savedRecipes)];
                tmpArr[isRecipeSavedIndex] = recipe;
                state.savedRecipes = tmpArr
            }

        },
        handleRecipeDelete: (state, action: PayloadAction<string>) => {

            let tmpArr = [...current(state.savedRecipes)];
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

} = myRecipesSlice.actions;

export default myRecipesSlice.reducer;
