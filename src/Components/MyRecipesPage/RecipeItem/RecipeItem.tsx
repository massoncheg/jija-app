import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadRecipeFromLocalStorage from "../../../Common/loadRecipeFromLocalStorage";
import { handleNameChange } from "../../../Store/Slices/commonSlice";
import { handleRecipeDelete } from "../../../Store/Slices/MyRecipes/myRecipesSlice";
import { setBaseState } from "../../../Store/Slices/RecipeRedactor/baseSlice";
import { DescriptionState, setDescriptionState } from "../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { setFlavoringsState } from "../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import { RecipeState } from "../../../Store/store";

import cls from "./RecipeItem.module.css"

// Компонент принимает в себя параметры рецепта и выдает карточку с названием, картинкой и описанием рецепта

interface RecipeItemProps {
    recipeName: string;
    recipeDescription: DescriptionState;
}


const RecipeItem = ({ recipeName, recipeDescription }: RecipeItemProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadRecipe = (name: string) => {

        const loadedState: RecipeState | undefined = loadRecipeFromLocalStorage(name)
        if (loadedState !== undefined) {
            dispatch(setBaseState(loadedState.base))
            dispatch(setFlavoringsState(loadedState.flavorings))
            dispatch(setDescriptionState(loadedState.description))
            dispatch(handleNameChange(loadedState.common.RecipeName))

        }
        
        navigate('/redactor');
    }

    return (
        <div className={cls.recipeBox}>
            <div className={cls.recipeName}>{recipeName}</div>
            <div className={cls.recipeDescription}>{JSON.stringify(recipeDescription)}</div>
            <button onClick={() => loadRecipe(recipeName)}>Загрузить</button>

            <button onClick={() => dispatch(handleRecipeDelete(recipeName))}>Удалить</button>
        </div>
    )
}
export default RecipeItem


