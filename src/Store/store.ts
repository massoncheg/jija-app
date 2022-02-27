import { configureStore } from '@reduxjs/toolkit'
import redactorReducer from './Slices/RecipeRedactor/redactorSlice'
import recipesReducer from './Slices/MyRecipes/myRecipesSlice'
import globalReducer from './Slices/Global/globalSlice'


export const store = configureStore({
    reducer: {
        redactor: redactorReducer,
        recipes: recipesReducer,
        global: globalReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch