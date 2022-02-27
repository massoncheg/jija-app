import React from "react";
import { useDispatch } from "react-redux";
import { CommonState } from "../../Store/Slices/RecipeRedactor/redactorSlice";
import { BaseSelectState } from "../../Store/Slices/RecipeRedactor/redactorSlice";
import { DescriptionState, handleSubmit } from "../../Store/Slices/RecipeRedactor/redactorSlice";
import { FlavoringsSelectState } from "../../Store/Slices/RecipeRedactor/redactorSlice";
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
    language: string;

}

const RecipeRedactor = React.memo(({ commonState, baseState, flavoringsState, descriptionState, language }: RecipeRedactorProps) => {

    return (
        <div className="flex flex-col min-h-full font-medium text-stone-200 bg-bg4">
            <div className="
                w-full flex flex-wrap justify-end items-center bg-bg2 border-gray-200 px-2 py-3.5">
                <SaveButton state={commonState} language={language} />
            </div>
            <div className="flex flex-col content-center min-h-full gap-2 m-5 text-base md:flex-row md:gap-3 md:text-lg justify-items-center ">
                <BaseSelect state={baseState} language={language} />
                <FlavoringsSelect state={flavoringsState} language={language} />
                <RecipeDescription state={descriptionState} baseState={baseState} flavoringsState={flavoringsState} language={language} />

            </div>
        </div>
    )

})
export default RecipeRedactor