import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface BaseSelectState {
    pgProportion: number;
    vgProportion: number;
    nicotineType: string;
    nicotinePercentage: number;
    liquidVolume: number;
}

const initialState: BaseSelectState = {
    pgProportion: 50,
    vgProportion: 50,
    nicotineType: 'Salt',
    nicotinePercentage: 20,
    liquidVolume: 30
}

export const baseSelectSlice = createSlice({
    name: 'baseSelect',
    initialState: initialState,
    reducers: {
        setBaseState: (state, action: PayloadAction<BaseSelectState>) => {
            state.pgProportion = action.payload.pgProportion
            state.vgProportion = action.payload.vgProportion
            state.nicotineType = action.payload.nicotineType
            state.nicotinePercentage = action.payload.nicotinePercentage
            state.liquidVolume = action.payload.liquidVolume
        },
        handlePgProportionsChange: (state, action: PayloadAction<string>) => {

            state.pgProportion = +action.payload
            state.vgProportion = 100 - +action.payload;
        },
        handleVgProportionsChange: (state, action: PayloadAction<string>) => {

            state.vgProportion = +action.payload;
            state.pgProportion = 100 - +action.payload;
        },
        handleNicotineTypeChange: (state, action: PayloadAction<string>) => {
            state.nicotineType = action.payload;
        },
        handleNicotinePercentageChange: (state, action: PayloadAction<string>) => {
            state.nicotinePercentage = +action.payload;
        },
        handleLiquidVolumeChange: (state, action: PayloadAction<string>) => {
            if (!isNaN(+action.payload)) {
                state.liquidVolume = +action.payload;
            }
        }

    },
})


export const {
    setBaseState, handlePgProportionsChange,
    handleVgProportionsChange, handleNicotineTypeChange,
    handleNicotinePercentageChange, handleLiquidVolumeChange } = baseSelectSlice.actions

export default baseSelectSlice.reducer
