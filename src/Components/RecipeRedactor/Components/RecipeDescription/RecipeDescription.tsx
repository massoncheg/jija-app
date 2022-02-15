import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { DescriptionState, handleSubmit } from "../../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

/* Компонент для отображения инструкции по приготовлению  
в соответствии с рецептом */

interface RecipeDescriptionProps {
    baseState: BaseSelectState;
    flavoringsState: FlavoringsSelectState;
    state: DescriptionState;
}


const RecipeDescription = React.memo(({ baseState, flavoringsState, state}: RecipeDescriptionProps) => {

    // const baseState: BaseSelectState = useSelector((state: RootState) => state.base)
    // const flavoringsState: FlavoringsSelectState = useSelector((state: RootState) => state.flavorings)
    // const descriptionState: DescriptionState = useSelector((state: RootState) => state.description)
    const dispatch = useDispatch();

    return (
        <div className={cls.recipeDescriptionWrapper}>

            <button onClick={() => dispatch(handleSubmit({ baseState, flavoringsState }))}>Подтвердить</button>
            {/* <button onClick={() => dispatch(handleSubmitSas())}>Подтвердить</button> */}
            <div>Общий объем жидкости: {state.liquidVolume} мл</div>
            <div>Нужно добавить пропиленгликоля: {state.pgVolume.toFixed(2)} мл</div>
            <div>Нужно добавить глицерина: {state.vgVolume.toFixed(2)} мл</div>
            <div>Нужно добавить никотина: {state.nicotineVolume.toFixed(2)} мл</div>
            <div>Общий объем ароматизаторов: {state.overallFlavorsVolume.toFixed(2)} мл</div>
            <div className={cls.flavorsBlock}>
                <div>Объемы ароматизаторов:</div>
                <div>{
                    state.selectedFlavorsVolumes!.length !== 0 ?
                        state.selectedFlavorsVolumes!.map(f => {
                            return (
                                <div key={f.engName}>
                                    <span>{f.engName}</span>
                                    <span> {f.flavoringPercent.toFixed(2)}%</span>
                                    <span> {f.flavoringVolume.toFixed(2)} мл или</span>
                                    <span> {f.flavoringVolumeDrops.toFixed(0)} кап</span>
                                </div>)
                        }) : <></>}
                </div>
            </div>
        </div>
    )

})

export default RecipeDescription