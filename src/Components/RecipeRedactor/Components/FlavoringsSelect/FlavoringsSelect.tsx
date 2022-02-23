import React from "react";

import FlavoringsSearch, { DataBaseFlavoring } from "./FlavoringsSearch";
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import {
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { useDispatch } from "react-redux";
import SelectedFlavoringItem from "./SelectedFlavoringItem";

/* Здесь можно будет выбрать ароматизаторы и их процент  */

interface FlavoringsSelectProps {
    state: FlavoringsSelectState;
    language: string;
}

const FlavoringsSelect = React.memo(({ state, language }: FlavoringsSelectProps) => {

    const dispatch = useDispatch();

    return (
        <div className="bg-bg2 w-full h-full p-4 rounded-lg">
            <div className="grid gap-2 grig-rows-2 grid-cols-1 content-center justify-center">
                <FlavoringsSearch addFlavoring={(e) => dispatch(handleFlavoringSelect(e))} language={language} />

                <div className='flex flex-col gap-1 p-2 grid-cols-1 bg-bg3 rounded-xl border-2 border-bg1'>
                    <div className='text-xl w-80'>
                        {language === "ru" ?
                            "Выбранные ароматизаторы:"
                            : "Chosen flavorings:"
                        }
                    </div>
                    <div className="justify-self-center">
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
                                        dispatch(handleFlavoringDelete(id))} flavoringId={item.flavoring.id}
                                />)}
                    </div>
                </div>
            </div>
        </div>
    )


})
export default FlavoringsSelect