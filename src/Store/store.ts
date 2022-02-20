import { configureStore } from '@reduxjs/toolkit'
import redactorReducer from './Slices/RecipeRedactor/redactorSlice'
import recipesReducer from './Slices/MyRecipes/myRecipesSlice'


export const store = configureStore({
    reducer: {
        redactor: redactorReducer,
        recipes: recipesReducer,      

    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch