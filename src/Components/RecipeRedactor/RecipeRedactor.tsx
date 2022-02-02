import React from "react";
import BaseSelect from "./Components/BaseSelect/BaseSelect";
import FlavoringsSelect from "./Components/FlavoringsSelect/FlavoringsSelect";
import RecipeDescription from "./Components/RecipeDescription/RecipeDescription";
import cls from "./RecipeRedactor.module.css"




const RecipeRedactor = () => {
    return (
        <div className={cls.redactorWrapper}>
            <BaseSelect />
            <FlavoringsSelect />
            <RecipeDescription />
        </div>
    )

}
export default RecipeRedactor