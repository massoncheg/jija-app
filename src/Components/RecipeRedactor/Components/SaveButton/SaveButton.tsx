
import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import saveRecipeToLocalStorage from "../../../../Common/saveRecipeToLocalStorage";
import { handleNameChange } from "../../../../Store/Slices/commonSlice";
import { handleRecipeAdd } from "../../../../Store/Slices/MyRecipes/myRecipesSlice";
import { handleSubmit } from "../../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { RecipeState, RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

interface SaveButtonProps {
    state: RecipeState;
}

const SaveButton = React.memo(({ state }: SaveButtonProps) => {

    

    const dispatch = useDispatch();


    return (
        <div className='flex'>
            <div className='bg-bg3 rounded mx-auto p-2'>
                <span className='flex pr-2'>Название рецепта</span>
                <input
                className='w-full box-border bg-bg2 rounded pl-2'
                type="text" onChange={(event) => dispatch(handleNameChange(event.currentTarget.value))} value={state.common.RecipeName} />
            </div>
            <button className='bg-bg3 rounded mx-4 px-1 py-0 overflow-hidden'
                onClick={() => {
                    saveRecipeToLocalStorage(state);
                    dispatch(handleRecipeAdd(state))
                }
                }   
            >
                Сохранить изменения
            </button>
        </div>
    )
})

export default SaveButton

