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
        <div className="text-stone-200 font-medium bg-bg4">
            <div className="
                w-screen flex flex-wrap justify-end items-center bg-bg2 border-gray-200 px-2 py-3.5">
                <SaveButton state={commonState} language={language}/>
            </div>
            <div className="grid gap-2 grid-cols-1 grid-rows-3 m-5  md:grid md:gap-3 md:grid-cols-3 md:grid-rows-1 content-center justify-items-center ">
                <BaseSelect state={baseState} language={language}/>
                <FlavoringsSelect state={flavoringsState} language={language}/>
                <RecipeDescription state={descriptionState} baseState={baseState} flavoringsState={flavoringsState} language={language}/>

            </div>
        </div>
    )

})
export default RecipeRedactor