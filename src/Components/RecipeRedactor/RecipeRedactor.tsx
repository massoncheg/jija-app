import React from "react";
import BaseSelect from "./Components/BaseSelect/BaseSelect";
import FlavoringsSelect from "./Components/FlavoringsSelect/FlavoringsSelect";
import RecipeDescription from "./Components/RecipeDescription/RecipeDescription";
import SaveButton from "./Components/SaveButton/SaveButton";
import cls from "./RecipeRedactor.module.css"




const RecipeRedactor = () => {
    return (
        <div className={cls.redactorWrapper}>
            <div className={cls.redactorcontentWrapper}>
            <BaseSelect />
            <FlavoringsSelect />
            <RecipeDescription />
            <SaveButton />
            </div>
        </div>
    )

}
export default RecipeRedactor