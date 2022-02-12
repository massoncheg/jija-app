import React from "react"; 
import { useDispatch } from "react-redux";
import { handleRecipeDelete } from "../../../Store/Slices/MyRecipes/myRecipesSlice";
import { DescriptionState } from "../../../Store/Slices/RecipeRedactor/descriptionSlice";

import cls from "./RecipeItem.module.css"

// Компонент принимает в себя параметры рецепта и выдает карточку с названием, картинкой и описанием рецепта

interface RecipeItemProps {
    recipeName: string;
    recipeDescription: DescriptionState;
}


const RecipeItem = ({recipeName, recipeDescription}: RecipeItemProps) => {

    const dispatch = useDispatch();

    return (
        <div className = {cls.recipeBox}>
            <div className = {cls.recipeName}>{recipeName}</div> 
            <div className = {cls.recipeDescription}>{JSON.stringify(recipeDescription)}</div>
            <button onClick={() => dispatch(handleRecipeDelete('TEST 2'))}>Удалить</button>
        </div>
    )
}
export default RecipeItem