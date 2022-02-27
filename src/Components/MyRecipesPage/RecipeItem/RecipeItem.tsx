import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadRecipeFromLocalStorage from "../../../Common/loadRecipeFromLocalStorage";
import { handleNameChange } from "../../../Store/Slices/RecipeRedactor/redactorSlice";
import { handleRecipeDelete } from "../../../Store/Slices/MyRecipes/myRecipesSlice";
import { setBaseState } from "../../../Store/Slices/RecipeRedactor/redactorSlice";
import { DescriptionState, setDescriptionState } from "../../../Store/Slices/RecipeRedactor/redactorSlice";
import { setFlavoringsState } from "../../../Store/Slices/RecipeRedactor/redactorSlice";
import { RedactorState } from "../../../Store/Slices/RecipeRedactor/redactorSlice";
import RecipeItemModal from "./RecipeItemModal";

import cls from "./RecipeItem.module.css"

// Компонент принимает в себя параметры рецепта и выдает карточку с названием и описанием рецепта

interface RecipeItemProps {
    recipeName: string;
    recipeDescription: DescriptionState;
}


const RecipeItem = ({ recipeName, recipeDescription }: RecipeItemProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadRecipe = (name: string) => {
        const loadedState: RedactorState | undefined = loadRecipeFromLocalStorage(name)
        if (loadedState !== undefined) {
            dispatch(setBaseState(loadedState.base))
            dispatch(setFlavoringsState(loadedState.flavorings))
            dispatch(setDescriptionState(loadedState.description))
            dispatch(handleNameChange(loadedState.common.RecipeName))
            navigate('/redactor');
        }
    }

    const handleRecipeOpen = (id: string) => {
        const modalBg = document.getElementById(id + 'modalBg')
        const modalContent = document.getElementById(id + 'modalContent')

        if (modalBg && modalContent && modalBg.style.display === "none") {
            modalBg.style.display = "block"
            modalContent.style.display = "block"
        }
        else if (modalBg && modalContent && modalBg.style.display !== "none") {
            modalBg.style.display = "none"
            modalContent.style.display = "none"
        }
    }

    return (
        <div className="w-[80%] md:w-1/5 lg:w-1/5">
            <div title="Щелкните по рецепту, чтобы открыть"
                className='flex justify-center m-1 overflow-hidden text-white border-2 h-min bg-bg3 rounded-xl border-bg1'>
            
                <button className='block w-full text-center h-60' onClick={() => handleRecipeOpen(recipeName)} id={recipeName + 'back'}>
                    {recipeName}
                </button>
            
            </div>
            <RecipeItemModal recipeName={recipeName} recipeDescription={recipeDescription}/>
        </div>

    )
}
export default RecipeItem


