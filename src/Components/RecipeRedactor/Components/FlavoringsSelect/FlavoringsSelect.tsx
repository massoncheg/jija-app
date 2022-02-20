import React from "react";

import FlavoringsSearch, { DataBaseFlavoring } from "./FlavoringsSearch";

import cls from "../RedactorComponents.module.css"
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import {
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";

/* Здесь можно будет выбрать ароматизаторы и их процент  */

interface SelectedFlavoringItemProps {
    key: string;
    engName: string
    flavoringPercent: number
    onPercentChange?: any;
    onDelete: (fId: number) => void;
    flavoringId: number
}

const SelectedFlavoringItem = ({ engName, flavoringPercent: flavoringPercent, onPercentChange: onPercentChange, onDelete, flavoringId }: SelectedFlavoringItemProps) => {

    return (
        <div className='
        grid grid-cols-3 grid-rows-1 justify-center content-center
        bg-bg2 border-2 border-bg1 p-2 rounded-xl w-80'>
            <div className='
            text-center self-center'>
                {engName}
            </div>
            <div className='justify-self-end self-center'>
                <input type="number" min="0" max="50"
                    className='text-center bg-bg3 rounded-lg
                    focus:outline-none focus:border-2 focus:border-bg1'
                    value={flavoringPercent}
                    onChange={(event) => onPercentChange(flavoringId, event)}
                /> %
            </div>
            <div className='justify-self-end self-center' >
                <button
                    className='bg-bg3 rounded-lg w-8 h-8'
                    onClick={() => onDelete(flavoringId)}>x</button>
            </div>
        </div>
    )
}

interface FlavoringsSelectProps {
    state: FlavoringsSelectState;
}

const FlavoringsSelect = React.memo(({ state }: FlavoringsSelectProps) => {

    // const state: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    const dispatch = useDispatch();

    return (
        <div className='redactor-component'>
            <div className="grid gap-2 grig-rows-2 grid-cols-1 content-center justify-center">
                <FlavoringsSearch addFlavoring={(e) => dispatch(handleFlavoringSelect(e))} />

                <div className='grid gap-1 p-2 grid-cols-1 bg-bg3 rounded-xl border-2 border-bg1'>
                    <div className='text-xl w-80'>Выбранные ароматизаторы:</div>
                    {state.selectedFlavors.map(
                        (item: { flavoring: DataBaseFlavoring, flavoringPercent: number }) =>
                            <SelectedFlavoringItem
                                key={item.flavoring.id.toString()}
                                engName={item.flavoring.engName}
                                flavoringPercent={item.flavoringPercent}
                                onPercentChange={
                                    (id: number, event: React.FormEvent<HTMLInputElement>) =>
                                        dispatch(handlePercentageChange({ id, value: event.currentTarget.value }))}
                                onDelete={(id: number) =>
                                    dispatch(handleFlavoringDelete(id))} flavoringId={item.flavoring.id} />)}
                </div>
            </div>
        </div>
    )


})
export default FlavoringsSelect