import { configureStore } from '@reduxjs/toolkit'
import baseReducer, { BaseSelectState } from './Slices/RecipeRedactor/baseSlice'
import descriptionReducer, { DescriptionState } from './Slices/RecipeRedactor/descriptionSlice'
import flavoringsReducer, { FlavoringsSelectState } from './Slices/RecipeRedactor/flavoringsSlice'
import commonReducer, { CommonState } from './Slices/commonSlice'
import recipesReducer from './Slices/MyRecipes/myRecipesSlice'

export interface RecipeState {
    common: CommonState;
    base: BaseSelectState;
    flavorings: FlavoringsSelectState;
    description: DescriptionState;
}

export const store = configureStore({
    reducer: {
        common: commonReducer,
        recipes: recipesReducer,
        base: baseReducer,
        flavorings: flavoringsReducer,
        description: descriptionReducer

    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch