import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface CommonState {
    RecipeName: string;
}

const initialState: CommonState = {
    RecipeName: 'New recipe'
}

export const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        
        handleNameChange: (state, action: PayloadAction<string>) => {

            state.RecipeName = action.payload

        }
    }
})


export const {
    handleNameChange 
} = commonSlice.actions

export default commonSlice.reducer
