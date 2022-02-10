import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface BaseSelectState {
    pgPropotion: number;
    vgPropotion: number;
    nicotineTipe: string;
    nicotinePercentage: number;
    liquidVolume: number;
}

const initialState: BaseSelectState = {
    pgPropotion: 50,
    vgPropotion: 50,
    nicotineTipe: 'Salt',
    nicotinePercentage: 20,
    liquidVolume: 30
}

export const baseSelectSlice = createSlice({
    name: 'baseSelect',
    initialState: initialState,
    reducers: {
        
        handlePgProportionsChange: (state, action: PayloadAction<React.FormEvent<HTMLInputElement>>) => {

            state.pgPropotion = +action.payload.currentTarget.value
            state.vgPropotion = 100 - +action.payload.currentTarget.value;
        },
        handleVgProportionsChange: (state, action: PayloadAction<React.FormEvent<HTMLInputElement>>) => {

            state.vgPropotion = +action.payload.currentTarget.value;
            state.pgPropotion = 100 - +action.payload.currentTarget.value;
        },
        handleNicotineTipeChange: (state, action: PayloadAction<React.FormEvent<HTMLSelectElement>>) => {
            state.nicotineTipe = action.payload.currentTarget.value;
        },
        handleNicotinePercentageChange: (state, action: PayloadAction<React.FormEvent<HTMLInputElement>>) => {
            state.nicotinePercentage = +action.payload.currentTarget.value;
        },
        handleLiquidVolumeChange: (state, action: PayloadAction<React.FormEvent<HTMLInputElement>>) => {
            if (!isNaN(+action.payload.currentTarget.value)) {
                state.liquidVolume = +action.payload.currentTarget.value;
            }
            }
    },
})


export const {
    handlePgProportionsChange, handleVgProportionsChange,
    handleNicotineTipeChange, handleNicotinePercentageChange,
    handleLiquidVolumeChange } = baseSelectSlice.actions

export default baseSelectSlice.reducer
