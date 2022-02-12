import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseSelectState } from './baseSlice'
import { FlavoringsSelectState, iSelectedFlavoring } from './flavoringsSlice'


/* Функции для расчета объемов компонентов */
const calculator = {
    calculateVgVolume: (liquidVolume: number, vgProportion: number) => { return liquidVolume * (vgProportion / 100) },
    calculateNicotineVolume: (liquidVolume: number, nicotineType: string, nicotinePercentage: number) => {
        if (nicotineType === "Standard") { return liquidVolume * (nicotinePercentage / 100) }
        else if (nicotineType === "Salt") { return liquidVolume * (nicotinePercentage / 200) }
        else { return 0 }
    },
    calculateFlavorsVolumes: (liquidVolume: number, flavoringsList: iSelectedFlavoring[]) => {
        return flavoringsList.map(f => {
            return {
                engName: f.flavoring.engName,
                flavoringPrecent: f.flavoringPrecent,
                flavoringVolume: (liquidVolume * (f.flavoringPrecent / 100)),
                flavoringVolumeDrops: ((liquidVolume * (f.flavoringPrecent / 100)) * 33)
            }
        })
    },
    calculateOverallFlavorsVolume: (flavoringsList: iCalculatedFlavoring[]) => {

        let overallVolume = flavoringsList.reduce((sum, item)=> sum + item.flavoringVolume, 0);
        
        return overallVolume
    },
    calculatePgVolume: (liquidVolume: number, pgProportion: number, NicotineVolume: number, overallFlavorsVolume: number) => { return liquidVolume * (pgProportion / 100) - NicotineVolume - overallFlavorsVolume }
}

interface iCalculatedFlavoring {
    engName: string,
    flavoringPrecent: number,
    flavoringVolume: number,
    flavoringVolumeDrops: number
}

export interface DescriptionState {
    liquidVolume: number,
    pgVolume: number,
    vgVolume: number,
    nicotineVolume: number,
    overallFlavorsVolume: number,
    selectedFlavorsVolumes: iCalculatedFlavoring[]
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
           
    
        }        
    },
})


export const {
    handleSubmit
} = descriptionSlice.actions

export default descriptionSlice.reducer
