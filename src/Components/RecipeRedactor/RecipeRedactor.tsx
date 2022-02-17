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
        <div className="text-stone-200 font-medium">
            <div className="
            w-full flex flex-wrap justify-end items-center 
            bg-bg2 border-gray-200 px-2 sm:px-4 py-3.5 dark:bg-gray-800">
            <SaveButton state={{
                common: commonState,
                base: baseState,
                flavorings: flavoringsState,
                description: descriptionState
            }} />
            </div>
            <div className="grid gap-2 grid-cols-1 grid-rows-3 m-5  md:grid md:gap-3 md:grid-cols-3 md:grid-rows-1 content-center justify-items-center ">
                <BaseSelect state={baseState} />
                <FlavoringsSelect state={flavoringsState} />
                <RecipeDescription state={descriptionState} baseState={baseState} flavoringsState={flavoringsState} />

            </div>
        </div>
    )

})
export default RecipeRedactor