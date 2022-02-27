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

            <div className='p-2 mx-auto rounded bg-bg3'>
                <span className='flex pr-2'>
                    {language === 'ru' ?
                        "Название рецепта"
                        : "Recipe name"
                    }
                </span>
                <input
                    className='box-border w-full pl-2 rounded bg-bg2 focus:outline-none focus:bg-bg1'
                    type="text" onChange={(event) => dispatch(handleNameChange(event.currentTarget.value))} value={state.RecipeName} />
            </div>

            <button className='px-1 py-0 mx-4 overflow-hidden rounded bg-bg3 focus:outline-none focus:bg-bg1'
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

