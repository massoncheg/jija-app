
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import saveRecipeToLocalStorage from "../../../../Common/saveRecipeToLocalStorage";
import { handleNameChange } from "../../../../Store/Slices/commonSlice";
import { handleRecipeAdd } from "../../../../Store/Slices/MyRecipes/myRecipesSlice";
import { RootState } from "../../../../Store/store";

import cls from "../RedactorComponents.module.css"



const SaveButton = () => {

    const state: RootState = useSelector((state: RootState) => state)
    
    const dispatch = useDispatch();

    

    return (
        <div className={cls.saveButtonWrapper}>
            <input type="text" onChange={(e) => dispatch(handleNameChange(e))} value={state.common.RecipeName} />
            <button className={cls.saveButton} onClick={() => {saveRecipeToLocalStorage(state); dispatch(handleRecipeAdd(state))}}>Сохранить изменения</button>
        </div>
    )
}

export default SaveButton

