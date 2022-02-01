import React from "react";

import FlavoringsSearch, { iDBFlavoring } from "./FlavoringsSearch";

import cls from "../RedactorComponents.module.css"
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import {
    handleFlavoringSelect, handlePrecentageChange,
    handleFlavoringDelete
} from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";

/* Здесь можно будет выбрать аромотизаторы и их процент  */

interface SelectedFlavoringItemProps {
    engName: string
    flavoringPrecent: number
    onPrecentChange?: any;
    onDelete: (fId: number) => void;
    flavoringId: number
}

const SelectedFlavoringItem = ({ engName, flavoringPrecent, onPrecentChange, onDelete, flavoringId }: SelectedFlavoringItemProps) => {

    return (
        <div className={cls.flavoringItem}>
            <span>{engName}</span>
            <span><input type="number" min="0" max="50" value={flavoringPrecent} onChange={(e) => onPrecentChange( flavoringId, e )} /> %</span>
            <span><button onClick={() => onDelete(flavoringId)}>x</button></span>
        </div>
    )
}

// interface FlavoringsSelectProps {
//     reducer: {
//         handleFlavoringSelect: (id: number, event: React.FormEvent<HTMLButtonElement>) => void;
//         handlePrecentageChange: (id: number, event: React.FormEvent<HTMLInputElement>) => void;
//         handleFlavoringDelete: (id:number) => void;
//     };
//     flavoringsList: { flavoring: iDBFlavoring, flavoringPrecent: number }[]
// }

const FlavoringsSelect = () => {

    const state: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    const dispatch = useDispatch();

    return (
        <div className={cls.flavoringsSelectComponentWrapper}>
            <FlavoringsSearch addFlavoring={(e) => dispatch(handleFlavoringSelect(e))} />
            <div>{state.selectedFlavors.map((f: { flavoring: iDBFlavoring, flavoringPrecent: number }) => <SelectedFlavoringItem engName={f.flavoring.engName} flavoringPrecent={f.flavoringPrecent}
                onPrecentChange={(id:number, event:React.FocusEvent<HTMLInputElement>) => dispatch(handlePrecentageChange({id, event}))} onDelete={(id: number) => dispatch(handleFlavoringDelete(id))} flavoringId={f.flavoring.id} />)}
            </div>
        </div>
    )


}
export default FlavoringsSelect