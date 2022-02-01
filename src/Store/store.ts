import { configureStore } from '@reduxjs/toolkit'
import baseReducer from './Slices/RecipeRedactor/baseSlice'
import descriptionReducer from './Slices/RecipeRedactor/descriptionSlice'
import flavoringsReducer from './Slices/RecipeRedactor/flavoringsSlice'

export const store = configureStore({
    reducer: {
        base: baseReducer,
        flavorings: flavoringsReducer,
        description: descriptionReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch