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

import cls from "./BaseSelect.module.css"

interface BaseSelectProps {
    state: BaseSelectState;
    language: string;
}

const BaseSelect = React.memo(({ state, language }: BaseSelectProps) => {


    const dispatch = useDispatch();



    return (
        <div className="flex content-center justify-center w-full h-[30rem] py-4 rounded-lg bg-bg2">

            <div className="grid content-center justify-center min-w-full grid-cols-2 grid-rows-6 gap-2 px-4 text-center">
                <div className="self-start col-span-2 p-2 border-2 bg-bg3 rounded-xl border-bg1">

                    {language === 'ru' ?
                        "Выберите пропорции жидкости:"
                        : "Choose liquid proportions:"
                    }
                </div>

                <div className="grid items-center grid-cols-2 col-span-2 grid-rows-1 border-2 bg-bg3 rounded-xl border-bg1">
                    <div>
                        <span className='text-ellipsis'>
                            {language === 'ru' ?
                                "PG-Пропилен-гликоль"
                                : "PG-Propylene glycol"
                            }
                        </span>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center justify-self-center'>
                            <span className='block pl-3 text-base w-min justify-self-center'>
                                {state.pgProportion}%
                            </span>
                        </div>

                        <div className='flex justify-center w-full justify-self-center'>
                            <input type="range" min="0" max="100" step="5"
                                className={cls.rangeSlider}
                                onInput={(event) => dispatch(handlePgProportionsChange(event.currentTarget.value))}
                                value={state.pgProportion} />
                        </div>

                    </div>
                </div>


                <div className="grid items-center grid-cols-2 col-span-2 grid-rows-1 border-2 bg-bg3 rounded-xl border-bg1">
                    <div>
                        <span>
                            {language === 'ru' ?
                                "VG-Глицерин"
                                : "VG-Vegetable Glycerin"
                            }
                        </span>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center justify-self-center'>
                            <span className='block pl-3 text-base w-min justify-self-center'>
                                {state.vgProportion}%
                            </span>
                        </div>

                        <div className='flex justify-center w-full justify-self-center'>
                            <input type="range" min="0" max="100" step="5"
                                className={cls.rangeSlider}
                                onInput={(event) => dispatch(handleVgProportionsChange(event.currentTarget.value))}
                                value={state.vgProportion} />
                        </div>

                    </div>
                </div>

                <div className="grid items-center grid-cols-2 col-span-2 grid-rows-1 border-2 bg-bg3 rounded-xl border-bg1">
                    <div>
                        {language === 'ru' ?
                            "Тип никотина:"
                            : "The nicotine type"
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        <select value={state.nicotineType} onChange={(event) => dispatch(handleNicotineTypeChange(event.currentTarget.value))}
                            className='
                            bg-bg2 font-medium w-[80%] text-left rounded text-ellipsis text-base hover:bg-bg1
                            focus:outline-none focus:border-2 focus:border-bg1'>
                            <option value="Salt">
                                {language === 'ru' ?
                                    "Солевой (20мг/мл)"
                                    : "Salt (20mg/ml)"
                                }
                            </option>
                            <option value="Standard">
                                {language === 'ru' ?
                                    "Стандарт (10мг/мл)"
                                    : "Standard (10mg/ml)"
                                }
                            </option>
                        </select>
                    </div>
                </div>


                <div className="grid items-center grid-cols-2 col-span-2 grid-rows-1 border-2 bg-bg3 rounded-xl border-bg1">

                    <div>
                        {language === 'ru' ?
                            "Крепость жидкости:"
                            : "Nicotine strength"
                        }
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center text-base justify-self-center'><span>{state.nicotinePercentage}mg</span></div>

                        <div className='flex justify-center w-full justify-self-center'>
                            <input type="range" min="0" max="50" step="5"
                                className={cls.rangeSlider}
                                onChange={(event) => dispatch(handleNicotinePercentageChange(event.currentTarget.value))}
                                value={state.nicotinePercentage} />
                        </div>
                    </div>

                </div>
                <div className="grid items-center grid-cols-2 col-span-2 grid-rows-1 border-2 bg-bg3 rounded-xl border-bg1">
                    <div>
                        {language === 'ru' ?
                            "Объем жидкости:"
                            : "Liquid volume"
                        }
                    </div>
                    <div>
                        <input type='number' min="0" max='99999'
                            className="font-semibold text-center rounded bg-bg2 focus:outline-none focus:bg-bg1 hover:bg-bg1"
                            value={state.liquidVolume || ""}
                            onChange={(event) => dispatch(handleLiquidVolumeChange(event.currentTarget.value))}
                        />
                        <span className="ml-1">{language === "ru" ? "мл" : "ml"}</span>
                    </div>
                </div>
            </div>

        </div>
    )
})

export default BaseSelect