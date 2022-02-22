import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handlePgProportionsChange, handleVgProportionsChange,
    handleNicotineTypeChange, handleNicotinePercentageChange,
    handleLiquidVolumeChange
} from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { handleSubmit } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

interface BaseSelectProps {
    state: BaseSelectState;
    language: string;
}

const BaseSelect = React.memo(({ state, language }: BaseSelectProps) => {


    const dispatch = useDispatch();



    return (
        <div className="redactor-component">

            <div className=" grid gap-1 grid-cols-2 grid-rows-6 content-center justify-center mx-auto text-center">
                <div className=" self-start col-span-2 p-2 bg-bg3 rounded-xl border-2 border-bg1">
                    Выберите пропорции жидкости:
                </div>

                <div className="col-span-2 grid grid-cols-2 grid-rows-1 items-center bg-bg3 rounded-xl border-2 border-bg1">
                    <div>
                        <span>
                            {language === 'ru' ?
                                "PG-Пропиленгликоль"
                                : "PG-Propylene glycol"
                            }

                        </span>
                    </div>
                    <div>
                        <input type="range" min="0" max="100" step="5"
                            className={cls.rangeSlider}
                            onInput={(event) => dispatch(handlePgProportionsChange(event.currentTarget.value))}
                            value={state.pgProportion} />
                        <span>{state.pgProportion}%</span>
                    </div>
                </div>


                <div className="col-span-2 grid grid-cols-2 grid-rows-1 items-center bg-bg3 rounded-xl border-2 border-bg1">
                    <div>
                        <span>
                            {language === 'ru' ?
                                "VG-Глицерин"
                                : "VG-Vegetable Glycerin"
                            }
                        </span>
                    </div>
                    <div>
                        <input type="range" min="0" max="100" step="5"
                            className={cls.rangeSlider}
                            onChange={(event) => dispatch(handleVgProportionsChange(event.currentTarget.value))}
                            value={state.vgProportion} />
                        <span>{state.vgProportion}%</span>
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 grid-rows-1 items-center bg-bg3 rounded-xl border-2 border-bg1">
                    <div>
                        {language === 'ru' ?
                            "Выберите тип никотина:"
                            : "Choose the nicotine type"
                        }
                    </div>
                    <div>
                        <select value={state.nicotineType} onChange={(event) => dispatch(handleNicotineTypeChange(event.currentTarget.value))}
                            className='
                            bg-bg2 font-medium w-max text-center rounded 
                            focus:outline-none focus:border-2 focus:border-bg1'>
                            <option value="Salt">
                                {language === 'ru' ?
                                    "Солевой (20мг/мл)"
                                    : "Salt (20mg/ml)"
                                }
                            </option>
                            <option value="Standard">
                                {language === 'ru' ?
                                    "Стандартный (10мг/мл)"
                                    : "Standard (10mg/ml)"
                                }
                            </option>
                        </select>
                    </div>
                </div>


                <div className="col-span-2 grid grid-cols-2 grid-rows-1 items-center bg-bg3 rounded-xl border-2 border-bg1">

                    <div>
                        {language === 'ru' ?
                            "Выберите крепость жидкости:"
                            : "Choose a nicotine strength"
                        }
                    </div>
                    <div>
                        <input type="range" min="0" max="50" step="5"
                            className={cls.rangeSlider}
                            onChange={(event) => dispatch(handleNicotinePercentageChange(event.currentTarget.value))}
                            value={state.nicotinePercentage} />
                        <span>{state.nicotinePercentage}mg</span>
                    </div>

                </div>
                <div className="col-span-2 grid grid-cols-2 grid-rows-1 items-center bg-bg3 rounded-xl border-2 border-bg1">
                    <div>Выберите объем жидкости</div>
                    <div>
                        <input type='number' min="0" max='99999'
                            className="
                            bg-bg2 rounded text-center
                            focus:outline-none focus:border-2 focus:border-bg1"
                            value={state.liquidVolume || ""}
                            onChange={(event) => dispatch(handleLiquidVolumeChange(event.currentTarget.value))}
                        />
                        <span> мл</span>
                    </div>
                </div>
            </div>

        </div>
    )
})

export default BaseSelect