import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { calculateDescription } from '../../../Common/calculator'
import { DataBaseFlavoring as DataBaseFlavoring } from '../../../Components/RecipeRedactor/Components/FlavoringsSelect/FlavoringsSearch'

import tpa from "../../../Common/TpaFlavorsList"

export interface CommonState {
    RecipeName: string;
}

export interface BaseSelectState {
    pgProportion: number;
    vgProportion: number;
    nicotineType: string;
    nicotinePercentage: number;
    liquidVolume: number;
}

export interface SelectedFlavoring {
    flavoring: DataBaseFlavoring,
    flavoringPercent: number
}

export interface FlavoringsSelectState {
    selectedFlavors: SelectedFlavoring[];
}

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

export interface RedactorState {
    common: CommonState;
    base: BaseSelectState;
    flavorings: FlavoringsSelectState;
    description: DescriptionState;
}

const initialState: RedactorState = {
    common: {
        RecipeName: 'New recipe'
    },
    base: {
        pgProportion: 50,
        vgProportion: 50,
        nicotineType: 'Salt',
        nicotinePercentage: 20,
        liquidVolume: 30
    },
    flavorings: {
        selectedFlavors: [],
    },
    description: {
        liquidVolume: 0,
        pgVolume: 0,
        vgVolume: 0,
        nicotineVolume: 0,
        overallFlavorsVolume: 0,
        selectedFlavorsVolumes: []
    }
}

export const redactorSlice = createSlice({
    name: 'recipeRedactor',
    initialState: initialState,
    reducers: {

        // конфигурация общей информации

        handleNameChange: (state, action: PayloadAction<string>) => {

            state.common.RecipeName = action.payload

        },

        // Конфигурация базы 

        setBaseState: (state, action: PayloadAction<BaseSelectState>) => {
            state.base.pgProportion = action.payload.pgProportion
            state.base.vgProportion = action.payload.vgProportion
            state.base.nicotineType = action.payload.nicotineType
            state.base.nicotinePercentage = action.payload.nicotinePercentage
            state.base.liquidVolume = action.payload.liquidVolume
        },
        handlePgProportionsChange: (state, action: PayloadAction<string>) => {

            state.base.pgProportion = +action.payload
            state.base.vgProportion = 100 - +action.payload;
        },
        handleVgProportionsChange: (state, action: PayloadAction<string>) => {

            state.base.vgProportion = +action.payload;
            state.base.pgProportion = 100 - +action.payload;
        },
        handleNicotineTypeChange: (state, action: PayloadAction<string>) => {
            state.base.nicotineType = action.payload;
        },
        handleNicotinePercentageChange: (state, action: PayloadAction<string>) => {
            state.base.nicotinePercentage = +action.payload;
        },
        handleLiquidVolumeChange: (state, action: PayloadAction<string>) => {
            if (!isNaN(+action.payload) && +action.payload < 99999) {
                state.base.liquidVolume = +action.payload;
            }
        },

        // Конфигурация ароматизаторов 

        setFlavoringsState: (state, action: PayloadAction<FlavoringsSelectState>) => {
            state.flavorings.selectedFlavors = action.payload.selectedFlavors
        },

        handleFlavoringSelect: (state, action: PayloadAction<number>) => {
            if (/* Здесь проверяем есть ли вообще аромки в списке, что бы не было ошибок при проверке на повторы */
                state.flavorings.selectedFlavors.length === 0

                /* Здесь проверяем есть ли уже эта аромка в списке*/

                || !state.flavorings.selectedFlavors.map((item) => item.flavoring.id).includes(action.payload)
            ) {

                const flavoring: DataBaseFlavoring | undefined = tpa.find((i: DataBaseFlavoring) => i.id === action.payload);
                if (flavoring) {
                    state.flavorings.selectedFlavors = current(state.flavorings.selectedFlavors).concat(
                        {
                            flavoring: flavoring,
                            flavoringPercent: 1
                        }
                    )
                }

            }
        },

        handlePercentageChange: (state, action: PayloadAction<{ id: number, value: string }>) => {
            const indexPercentToChange = state.flavorings.selectedFlavors.findIndex((item: SelectedFlavoring) => item.flavoring.id === Number(action.payload.id));
            state.flavorings.selectedFlavors[indexPercentToChange] = { ...state.flavorings.selectedFlavors[indexPercentToChange], flavoringPercent: +action.payload.value };
            if (state.flavorings.selectedFlavors[indexPercentToChange].flavoringPercent > 50){
                state.flavorings.selectedFlavors[indexPercentToChange] = { ...state.flavorings.selectedFlavors[indexPercentToChange], flavoringPercent: 50 };
            }
        },

        handleFlavoringDelete: (state, action: PayloadAction<number>) => {
            const indexFlavoringToDelete = current(state.flavorings.selectedFlavors)
                .findIndex((item: SelectedFlavoring) => item.flavoring.id === Number(action.payload));
            let tmpArr = [...current(state.flavorings.selectedFlavors)]
            tmpArr.splice(indexFlavoringToDelete, 1);
            state.flavorings.selectedFlavors = tmpArr;

        },

        // Конфигурация описания

        setDescriptionState: (state, action: PayloadAction<DescriptionState>) => {
            state.description.liquidVolume = action.payload.liquidVolume
            state.description.pgVolume = action.payload.pgVolume
            state.description.vgVolume = action.payload.vgVolume
            state.description.nicotineVolume = action.payload.nicotineVolume
            state.description.overallFlavorsVolume = action.payload.overallFlavorsVolume
            state.description.selectedFlavorsVolumes = action.payload.selectedFlavorsVolumes

        },
        handleSubmit: (state,) => {

            const result = calculateDescription(state.base, state.flavorings)

            state.description = { ...result }
        },

    },
})

export const {
    handleNameChange
} = redactorSlice.actions

export const {
    setBaseState, handlePgProportionsChange,
    handleVgProportionsChange, handleNicotineTypeChange,
    handleNicotinePercentageChange, handleLiquidVolumeChange } = redactorSlice.actions

export const {
    setFlavoringsState,
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} = redactorSlice.actions

export const { setDescriptionState,
    handleSubmit
} = redactorSlice.actions



export default redactorSlice.reducer
