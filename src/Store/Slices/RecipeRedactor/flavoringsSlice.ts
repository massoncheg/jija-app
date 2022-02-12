import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { iDBFlavoring } from '../../../Components/RecipeRedactor/Components/FlavoringsSelect/FlavoringsSearch';

import tpa from "../../../Common/TpaFlavorsList"

export interface iSelectedFlavoring {
    flavoring: iDBFlavoring,
    flavoringPrecent: number
}


export interface FlavoringsSelectState {
    selectedFlavors: iSelectedFlavoring[];
}

const initialState: FlavoringsSelectState = {
    selectedFlavors: [],
}

export const flavoringsSelectSlice = createSlice({
    name: 'flavoringsSelect',
    initialState: initialState,
    reducers: {

        handleFlavoringSelect: (state, action: PayloadAction<number>) => {
            if (/* Здесь проверяем есть ли вообще аромки в списке, что бы не было ошибок при проверке на повторы */
                state.selectedFlavors.length === 0

                /* Здесь проверяем есть ли уже эта аромка в списке*/
                
                || !state.selectedFlavors.map((item) => item.flavoring.id).includes(action.payload)
                ){

                const flavoring: iDBFlavoring | undefined = tpa.find((i: iDBFlavoring) => i.id === action.payload);
                if (flavoring) {
                    state.selectedFlavors = current(state.selectedFlavors).concat(
                        {
                            flavoring: flavoring,
                            flavoringPrecent: 1
                        }
                    )
                }
                                
            }
        },

        handlePercentageChange: (state, action: PayloadAction<{ id: number, event: React.FormEvent<HTMLInputElement> }>) => {

            const indexPrecentToChange = state.selectedFlavors.findIndex((item: iSelectedFlavoring) => item.flavoring.id === Number(action.payload.id));
            state.selectedFlavors[indexPrecentToChange] = { ...state.selectedFlavors[indexPrecentToChange], flavoringPrecent: +action.payload.event.currentTarget.value };

        },

        handleFlavoringDelete: (state, action: PayloadAction<number>) => {
            const indexFlavoringToDelete = current(state.selectedFlavors).findIndex((item: iSelectedFlavoring) => item.flavoring.id === Number(action.payload));
            let tmpArr = [...current(state.selectedFlavors)]
            tmpArr.splice(indexFlavoringToDelete, 1);
            state.selectedFlavors = tmpArr;

        }
    },
})


export const {
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} = flavoringsSelectSlice.actions

export default flavoringsSelectSlice.reducer
