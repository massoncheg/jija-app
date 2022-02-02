import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { DesriptionState, handleSubmit } from "../../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

/* Компонент для отображения инструкции по приготовлению  
в соответствии с рецептом */

interface RecipeDescriptionProps {
    state: {
        liquidVolume: number,
        pgVolume: number,
        vgVolume: number,
        nicotineVolume?: number,
        overallFlavorsVolume?: number,
        selectedFlavorsVolumes?: any[]
    };
    onSubmit: (event: React.FormEvent) => void;
}

const RecipeDescription = () => {

    const baseState: BaseSelectState = useSelector((state: RootState) => state.base)
    const flavoringsState: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    const descriptionState: DesriptionState = useSelector((state: RootState) => state.description)
    const dispatch = useDispatch();

    return (
        <div className={cls.recipeDescriptionWrapper}>

            <button onClick={() => dispatch(handleSubmit({baseState: baseState, flavoringsState: flavoringsState}))}>Подтвердить</button>

            <div>Общий объем жидкости: { descriptionState.liquidVolume} мл</div>
            <div>Нужно добавить пропиленглюколя: {  descriptionState.pgVolume.toFixed(2)} мл</div>
            <div>Нужно добавить глицерина: {  descriptionState.vgVolume.toFixed(2)} мл</div>
            <div>Нужно добавить никотина: {  descriptionState.nicotineVolume.toFixed(2)} мл</div>
            <div>Общий объем аромотизаторов: { descriptionState.overallFlavorsVolume.toFixed(2)} мл</div>
            <p className={cls.flavorsBlock}>
            <div>Объемы аромотизаторов:</div>
            <div>{
                  descriptionState.selectedFlavorsVolumes!.length !== 0 ?
                  descriptionState.selectedFlavorsVolumes!.map(f => {
                        return (
                            <div>
                                <span>{f.engName}</span>
                                <span> {f.flavoringPrecent.toFixed(2)}%</span>
                                <span> {f.flavoringVolume.toFixed(2)} мл или</span>
                                <span> {f.flavoringVolumeDrops.toFixed(0)} кап</span>
                            </div>)
                    }) : <></>}
            </div>
            </p>
        </div>
    )

}

export default RecipeDescription