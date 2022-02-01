import React from "react"; 

import cls from "./RecipeItem.module.css"

// Компонент принимает в себя параметры рецепта и выдает карточку с названием, картинкой и описанием рецепта

interface RecipeItemProps {
    recipeName?: string
}


const RecipeItem = ({recipeName}: RecipeItemProps) => {
    return (
        <div className = {cls.recipeBox}>
            <div className = {cls.recipeName}>{recipeName || "My recipe"}</div> 
        </div>
    )
}
export default RecipeItem