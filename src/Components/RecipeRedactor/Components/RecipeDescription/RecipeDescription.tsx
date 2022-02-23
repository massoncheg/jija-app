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


const RecipeDescription = React.memo(({ baseState, flavoringsState, state, language }: RecipeDescriptionProps) => {

    const dispatch = useDispatch();

    return (
        <div className="bg-bg2 w-full h-full p-4 rounded-lg">
            <div className='grid gap-2 grid-cols-1'>

                <button
                    className='bg-bg3 rounded-xl border-2 border-bg1'
                    onClick={() => dispatch(handleSubmit())}
                >
                    {language === "ru" ?
                        "Рассчитать"
                        : "Calculate"
                    }
                </button>
                {language === "ru" ?
                    <div className='flex flex-col p-2 bg-bg3 rounded-xl border-2 border-bg1'>
                        <div>Общий объем жидкости: {state.liquidVolume} мл</div>
                        <div>Нужно добавить пропиленгликоля: {state.pgVolume.toFixed(2)} мл</div>
                        <div>Нужно добавить глицерина: {state.vgVolume.toFixed(2)} мл</div>
                        <div>Нужно добавить никотина: {state.nicotineVolume.toFixed(2)} мл</div>
                        <div>Общий объем ароматизаторов: {state.overallFlavorsVolume.toFixed(2)} мл</div>
                    </div>
                    :
                    <div className='flex flex-col p-2 bg-bg3 rounded-xl border-2 border-bg1'>
                        <div>Total liquid volume: {state.liquidVolume} ml</div>
                        <div>Volume of propylene glycol to add: {state.pgVolume.toFixed(2)} ml</div>
                        <div>volume of glycerine to add: {state.vgVolume.toFixed(2)} ml</div>
                        <div>Volume of nicotine to add: {state.nicotineVolume.toFixed(2)} ml</div>
                        <div>Total flavorings volume: {state.overallFlavorsVolume.toFixed(2)} ml</div>
                    </div>
                }
                <div className='p-2 bg-bg3 rounded-xl border-2 border-bg1'>
                    <div>{language === "ru" ? "Объемы ароматизаторов:" : "Flavorings volumes:"}</div>
                    <div>{
                        state.selectedFlavorsVolumes.length !== 0 ?
                            language === "ru" ?
                                state.selectedFlavorsVolumes!.map((i) => {
                                    return (
                                        <div className='p-2 bg-bg2 rounded-xl border-2 border-bg1 my-1'
                                            key={i.engName}
                                        >
                                            <span>{i.engName}: </span>
                                            <span> {i.flavoringPercent.toFixed(2)}%</span>
                                            <span> {i.flavoringVolume.toFixed(2)} мл или</span>
                                            <span> {i.flavoringVolumeDrops.toFixed(0)} кап</span>
                                        </div>
                                    )
                                })
                                :
                                state.selectedFlavorsVolumes!.map((i) => {
                                    return (
                                        <div className='p-2 bg-bg2 rounded-xl border-2 border-bg1 my-1'
                                            key={i.engName}
                                        >
                                            <span>{i.engName}: </span>
                                            <span> {i.flavoringPercent.toFixed(2)}%</span>
                                            <span> {i.flavoringVolume.toFixed(2)} ml or</span>
                                            <span> {i.flavoringVolumeDrops.toFixed(0)} drops</span>
                                        </div>
                                    )
                                })
                                : <></>
                            }
                    </div>
                </div>
            </div>
        </div>
    )

})

export default RecipeDescription