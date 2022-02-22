import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { DescriptionState, handleSubmit } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { FlavoringsSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

/* Компонент для отображения инструкции по приготовлению  
в соответствии с рецептом */

interface RecipeDescriptionProps {
    baseState: BaseSelectState;
    flavoringsState: FlavoringsSelectState;
    state: DescriptionState;
    language: string;
}


const RecipeDescription = React.memo(({ baseState, flavoringsState, state }: RecipeDescriptionProps) => {

    const dispatch = useDispatch();

    return (
        <div className='redactor-component'>
            <div className='grid gap-2 grid-cols-1'>

                <button
                    className='bg-bg3 rounded-xl border-2 border-bg1'
                    onClick={() => dispatch(handleSubmit())}>
                    Подтвердить
                </button>
                <div className='p-2 bg-bg3 rounded-xl border-2 border-bg1'>
                    <div>Общий объем жидкости: {state.liquidVolume} мл</div>
                    <div>Нужно добавить пропиленгликоля: {state.pgVolume.toFixed(2)} мл</div>
                    <div>Нужно добавить глицерина: {state.vgVolume.toFixed(2)} мл</div>
                    <div>Нужно добавить никотина: {state.nicotineVolume.toFixed(2)} мл</div>
                    <div>Общий объем ароматизаторов: {state.overallFlavorsVolume.toFixed(2)} мл</div>
                </div>

                <div className='p-2 bg-bg3 rounded-xl border-2 border-bg1'>
                    <div>Объемы ароматизаторов:</div>
                    <div>{
                        state.selectedFlavorsVolumes!.length !== 0 ?
                            state.selectedFlavorsVolumes!.map(f => {
                                return (
                                    <div className='p-2 bg-bg2 rounded-xl border-2 border-bg1 my-1'
                                    key={f.engName}>
                                        <span>{f.engName}</span>
                                        <span> {f.flavoringPercent.toFixed(2)}%</span>
                                        <span> {f.flavoringVolume.toFixed(2)} мл или</span>
                                        <span> {f.flavoringVolumeDrops.toFixed(0)} кап</span>
                                    </div>)
                            }) : <></>}
                    </div>
                </div>
            </div>
        </div>
    )

})

export default RecipeDescription