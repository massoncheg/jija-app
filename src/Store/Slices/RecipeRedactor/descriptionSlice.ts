import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseSelectState } from './baseSlice'
import { FlavoringsSelectState, iSelectedFlavoring } from './flavoringsSlice'


/* Функции для расчета объемов компонентов */
const calculator = {
    calculateVgVolume: (liquidVolume: number, vgPropotion: number) => { return liquidVolume * (vgPropotion / 100) },
    calculateNicotineVolume: (liquidVolume: number, nicotineTipe: string, nicotinePercentage: number) => {
        if (nicotineTipe === "Standart") { return liquidVolume * (nicotinePercentage / 100) }
        else if (nicotineTipe === "Salt") { return liquidVolume * (nicotinePercentage / 200) }
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

        let overallVolume = 0;
        for (let i = 0; i < flavoringsList.length; ++i) {
            overallVolume += flavoringsList[i]["flavoringVolume"];
        }

        return overallVolume
    },
    calculatePgVolume: (liquidVolume: number, pgPropotion: number, NicotineVolume: number, overallFlavorsVolume: number) => { return liquidVolume * (pgPropotion / 100) - NicotineVolume - overallFlavorsVolume }
}

interface iCalculatedFlavoring {
    engName: string,
    flavoringPrecent: number,
    flavoringVolume: number,
    flavoringVolumeDrops: number
}

export interface DesriptionState {
    liquidVolume: number,
    pgVolume: number,
    vgVolume: number,
    nicotineVolume: number,
    overallFlavorsVolume: number,
    selectedFlavorsVolumes: iCalculatedFlavoring[]
}

const initialState: DesriptionState = {
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

        

            let liquidVolume = action.payload.baseState.liquidVolume;
            let vgVolume = calculator.calculateVgVolume(liquidVolume, action.payload.baseState.vgPropotion);
            let nicotineVolume = calculator.calculateNicotineVolume(liquidVolume, action.payload.baseState.nicotineTipe, action.payload.baseState.nicotinePercentage);
            let selectedFlavorsVolumes = calculator.calculateFlavorsVolumes(liquidVolume, action.payload.flavoringsState.selectedFlavors);
            let overallFlavorsVolume = calculator.calculateOverallFlavorsVolume(selectedFlavorsVolumes);
            let pgVolume = calculator.calculatePgVolume(liquidVolume, action.payload.baseState.pgPropotion, nicotineVolume, overallFlavorsVolume);
    
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
