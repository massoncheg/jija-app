import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    handlePgProportionsChange, handleVgProportionsChange,
    handleNicotineTypeChange, handleNicotinePercentageChange,
    handleLiquidVolumeChange
} from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { BaseSelectState } from "../../../../Store/Slices/RecipeRedactor/baseSlice";
import { handleSubmit } from "../../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

interface BaseSelectProps {
    state: BaseSelectState;
    
}

const BaseSelect = React.memo(({ state }: BaseSelectProps) => {

    
    const dispatch = useDispatch();
    


    return (
        <div className={cls.baseSelectWrapper}>
            <div>
                <div>
                    Выберите пропорции жидкости:
                </div>
                <div>
                    <span>PG Пропиленгликоль</span>
                    <input type="range" min="0" max="100" step="5"
                        onInput={(event) => dispatch(handlePgProportionsChange(event.currentTarget.value))}
                        value={state.pgProportion} />
                    <span>{state.pgProportion}%</span>
                </div>
                <div>
                    <span>VG Глицерин</span>
                    <input type="range" min="0" max="100" step="5"
                        onChange={(event) => dispatch(handleVgProportionsChange(event.currentTarget.value))}
                        value={state.vgProportion} />
                    <span>{state.vgProportion}%</span>
                </div>
            </div>
            <div>
                <label>
                    Выберите тип никотина:
                    <select value={state.nicotineType} onChange={(event) => dispatch(handleNicotineTypeChange(event.currentTarget.value))}>
                        <option value="Salt">Солевой</option>
                        <option value="Standard">Стандартный</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Выберите крепость жидкости:
                    <input type="range" min="0" max="50" step="5"
                        onChange={(event) => dispatch(handleNicotinePercentageChange(event.currentTarget.value))}
                        value={state.nicotinePercentage} />
                    <span>{state.nicotinePercentage}mg</span>
                </label>
            </div>
            <div>
                <input value={state.liquidVolume || ""} onChange={(event) => dispatch(handleLiquidVolumeChange(event.currentTarget.value))} />
                <span> мл</span>
            </div>
        </div>
    )
})

export default BaseSelect