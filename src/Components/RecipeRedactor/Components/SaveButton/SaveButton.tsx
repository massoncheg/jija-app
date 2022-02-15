
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
        <div className={cls.saveButtonWrapper}>
            <input type="text" onChange={(event) => dispatch(handleNameChange(event.currentTarget.value))} value={state.common.RecipeName} />
            <button className={cls.saveButton}
                onClick={() => {
                    // Меняем состояние: из текущих пропорций генерируем рецепт 
                    dispatch(handleSubmit({ baseState: state.base, flavoringsState: state.flavorings }))
                    // Используем состояние, но оно не изменено тк стейт обновится только после ререндера :( 
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

