import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handlePgProportionsChange, handleVgProportionsChange,
    handleNicotineTipeChange, handleNicotinePercentageChange,
    handleLiquidVolumeChange } from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"



const BaseSelect = () => {

    const state: BaseSelectState = useSelector((state: RootState) => state.base)
    const dispatch = useDispatch();
    
    return (
        <div className={cls.baseSelectWrapper}>
            <div>
                <div>
                    Выбирите пропорции жидкости:
                </div>
                <div>
                    <span>PG Пропиленгликоль</span>
                    <input type="range" min="0" max="100" step="5" onChange={(e) => dispatch(handlePgProportionsChange(e))} value={state.pgPropotion} />
                    <span>{state.pgPropotion}%</span>
                </div>
                <div>
                    <span>VG Глицерин</span>
                    <input type="range" min="0" max="100" step="5" onChange={(e) => dispatch(handleVgProportionsChange(e))} value={state.vgPropotion} />
                    <span>{state.vgPropotion}%</span>
                </div>
            </div>
            <div>
                <label>
                    Выберите тип никотина:
                    <select value={state.nicotineTipe} onChange={(e) => dispatch(handleNicotineTipeChange(e))}>
                        <option value="Salt">Солевой</option>
                        <option value="Standart">Стандартный</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Выбирите крепость жидкости:
                    <input type="range" min="0" max="50" step="5" onChange={(e) => dispatch(handleNicotinePercentageChange(e))} value={state.nicotinePercentage} />
                    <span>{state.nicotinePercentage}mg</span>
                </label>
            </div>
            <div>
                <input value={state.liquidVolume || ""} onChange={(e) =>dispatch(handleLiquidVolumeChange(e))} />
                <span> мл</span>
            </div>
        </div>
    )
}

export default BaseSelect