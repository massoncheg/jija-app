import React from "react";
import { useDispatch } from "react-redux";
import { CommonState } from "../../Store/Slices/commonSlice";
import { BaseSelectState } from "../../Store/Slices/RecipeRedactor/baseSlice";
import { DescriptionState, handleSubmit } from "../../Store/Slices/RecipeRedactor/descriptionSlice";
import { FlavoringsSelectState } from "../../Store/Slices/RecipeRedactor/flavoringsSlice";
import BaseSelect from "./Components/BaseSelect/BaseSelect";
import FlavoringsSelect from "./Components/FlavoringsSelect/FlavoringsSelect";
import RecipeDescription from "./Components/RecipeDescription/RecipeDescription";
import SaveButton from "./Components/SaveButton/SaveButton";
import cls from "./RecipeRedactor.module.css"

interface RecipeRedactorProps {

    commonState: CommonState;
    baseState: BaseSelectState;
    flavoringsState: FlavoringsSelectState;
    descriptionState: DescriptionState;

}

const RecipeRedactor = React.memo(({ commonState, baseState, flavoringsState, descriptionState }: RecipeRedactorProps) => {

    const dispatch = useDispatch();
    

    return (
        <div className={cls.redactorWrapper}>
            <div className={cls.redactorContentWrapper}>
                <BaseSelect state={baseState} />
                <FlavoringsSelect state={flavoringsState} />
                <RecipeDescription state={descriptionState} baseState={baseState} flavoringsState={flavoringsState} />
                <SaveButton state={{
                    common: commonState,
                    base: baseState,
                    flavorings: flavoringsState,
                    description: descriptionState
                }} />
            </div>
        </div>
    )

})
export default RecipeRedactor