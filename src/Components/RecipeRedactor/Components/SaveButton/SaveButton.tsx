
import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import saveRecipeToLocalStorage from "../../../../Common/saveRecipeToLocalStorage";
import { CommonState, handleNameChange } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { handleRecipeAdd } from "../../../../Store/Slices/MyRecipes/myRecipesSlice";
import { handleSubmit } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { RedactorState } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { RootState, store } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

interface SaveButtonProps {
    state: CommonState;
}

const SaveButton = React.memo(({ state }: SaveButtonProps) => {



    const dispatch = useDispatch();


    return (
        <div className='flex'>

            <div className='bg-bg3 rounded mx-auto p-2'>
                <span className='flex pr-2'>Название рецепта</span>
                <input
                    className='w-full box-border bg-bg2 rounded pl-2'
                    type="text" onChange={(event) => dispatch(handleNameChange(event.currentTarget.value))} value={state.RecipeName} />
            </div>
            
            <button className='bg-bg3 rounded mx-4 px-1 py-0 overflow-hidden'
                onClick={() => {
                    dispatch(handleSubmit())
                    saveRecipeToLocalStorage();
                    dispatch(handleRecipeAdd(store.getState().redactor));
                }
                }
            >
                Сохранить изменения
            </button>

        </div>
    )
})

export default SaveButton

