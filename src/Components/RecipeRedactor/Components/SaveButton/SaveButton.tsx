import React from "react";
import { useDispatch } from "react-redux";
import saveRecipeToLocalStorage from "../../../../Common/saveRecipeToLocalStorage";
import { CommonState, handleNameChange } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";
import { handleRecipeAdd } from "../../../../Store/Slices/MyRecipes/myRecipesSlice";
import { handleSubmit } from "../../../../Store/Slices/RecipeRedactor/redactorSlice";

import { store } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"

interface SaveButtonProps {
    state: CommonState;
    language: string;
}

const SaveButton = React.memo(({ state, language }: SaveButtonProps) => {



    const dispatch = useDispatch();


    return (
        <div className='flex'>

            <div className='bg-bg3 rounded mx-auto p-2'>
                <span className='flex pr-2'>
                    {language === 'ru' ?
                        "Название рецепта"
                        : "Recipe name"
                    }
                </span>
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
                {language === 'ru' ?
                    "Сохранить изменения"
                    : "Save Changes"
                }
            </button>

        </div>
    )
})

export default SaveButton

