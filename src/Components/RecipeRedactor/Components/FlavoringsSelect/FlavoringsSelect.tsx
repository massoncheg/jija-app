import React from "react";

import FlavoringsSearch, { DataBaseFlavoring } from "./FlavoringsSearch";
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import {
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { useDispatch } from "react-redux";
import FlavoringSelectItem from "./FlavoringSelectItem";

/* Здесь можно будет выбрать ароматизаторы и их процент  */

interface FlavoringsSelectProps {
    state: FlavoringsSelectState;
    language: string;
}

const FlavoringsSelect = React.memo(({ state, language }: FlavoringsSelectProps) => {

    const dispatch = useDispatch();

    return (
        <div className="w-full h-full p-4 rounded-lg bg-bg2">
            <div className="grid content-center justify-center grid-cols-1 gap-2 grig-rows-2">
                <FlavoringsSearch addFlavoring={(e) => dispatch(handleFlavoringSelect(e))} language={language} />

                <div className='flex flex-col grid-cols-1 gap-1 p-2 border-2 bg-bg3 rounded-xl border-bg1'>
                    <div className='text-xl w-80'>
                        {language === "ru" ?
                            "Выбранные ароматизаторы:"
                            : "Chosen flavorings:"
                        }
                    </div>
                    <div className="justify-self-center">
                        {state.selectedFlavors.map(
                            (item: { flavoring: DataBaseFlavoring, flavoringPercent: number }) =>
                                <FlavoringSelectItem
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