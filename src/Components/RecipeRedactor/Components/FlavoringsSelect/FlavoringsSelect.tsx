import React from "react";

import FlavoringsSearch, { iDBFlavoring } from "./FlavoringsSearch";

import cls from "../RedactorComponents.module.css"
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import {
    handleFlavoringSelect, handlePercentageChange,
    handleFlavoringDelete
} from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
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
        <div className={cls.flavoringItem}>
            <span>{engName}</span>
            <span><input type="number" min="0" max="50" value={flavoringPercent} onChange={(event) => onPercentChange(flavoringId, event)} /> %</span>
            <span><button onClick={() => onDelete(flavoringId)}>x</button></span>
        </div>
    )
}

interface FlavoringsSelectProps {
    state: FlavoringsSelectState;
}

const FlavoringsSelect = React.memo(({state}:FlavoringsSelectProps) => {

    // const state: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    const dispatch = useDispatch();

    return (
        <div className={cls.flavoringsSelectComponentWrapper}>
            <FlavoringsSearch addFlavoring={(e) => dispatch(handleFlavoringSelect(e))} />
            <div className={cls.selectedFlavorsArea}>
                <div style={{ "fontSize": "20px", "color": "white", "margin": "0.5vh" } as React.CSSProperties}>Выбранные ароматизаторы:</div>

                {state.selectedFlavors.map(
                    (item: { flavoring: iDBFlavoring, flavoringPercent: number }) =>
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
    )


})
export default FlavoringsSelect