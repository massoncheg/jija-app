import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseSelectState } from './baseSlice'
import { FlavoringsSelectState, SelectedFlavoring } from './redactorSlice'
import { store } from '../../store'
import {calculator} from '../../../Common/calculator'

export interface CalculatedFlavoring {
    engName: string,
    flavoringPercent: number,
    flavoringVolume: number,
    flavoringVolumeDrops: number
}

export interface DescriptionState {
    liquidVolume: number,
    pgVolume: number,
    vgVolume: number,
    nicotineVolume: number,
    overallFlavorsVolume: number,
    selectedFlavorsVolumes: CalculatedFlavoring[]
}

const initialState: DescriptionState = {
    liquidVolume: 0,
    pgVolume: 0,
    vgVolume: 0,
    nicotineVolume: 0,
    overallFlavorsVolume: 0,
    selectedFlavorsVolumes: []
}

export const descriptionSlice = createSlice({
    name: 'description',
    initialState: initialState,
    reducers: {
        setDescriptionState: (state, action: PayloadAction<DescriptionState>) => {
            state.liquidVolume = action.payload.liquidVolume
            state.pgVolume = action.payload.pgVolume
            state.vgVolume = action.payload.vgVolume
            state.nicotineVolume = action.payload.nicotineVolume
            state.overallFlavorsVolume = action.payload.overallFlavorsVolume
            state.selectedFlavorsVolumes = action.payload.selectedFlavorsVolumes

        },
        handleSubmit: (state, action: PayloadAction<{ baseState: BaseSelectState, flavoringsState: FlavoringsSelectState }>) => {

            const baseState = action.payload.baseState
            const flavoringState = action.payload.flavoringsState

            const liquidVolume = baseState.liquidVolume;
            const vgVolume = calculator.calculateVgVolume(liquidVolume, baseState.vgProportion);
            const nicotineVolume = calculator.calculateNicotineVolume(liquidVolume, baseState.nicotineType, baseState.nicotinePercentage);
            const selectedFlavorsVolumes = calculator.calculateFlavorsVolumes(liquidVolume, flavoringState.selectedFlavors);
            const overallFlavorsVolume = calculator.calculateOverallFlavorsVolume(selectedFlavorsVolumes);
            const pgVolume = calculator.calculatePgVolume(liquidVolume, baseState.pgProportion, nicotineVolume, overallFlavorsVolume);

            state.liquidVolume = liquidVolume
            state.pgVolume = pgVolume
            state.vgVolume = vgVolume
            state.nicotineVolume = nicotineVolume
            state.overallFlavorsVolume = overallFlavorsVolume
            state.selectedFlavorsVolumes = selectedFlavorsVolumes
        },
    },
})


export const { setDescriptionState,
    handleSubmit, /* handleSubmitSas */
} = descriptionSlice.actions

export default descriptionSlice.reducer
