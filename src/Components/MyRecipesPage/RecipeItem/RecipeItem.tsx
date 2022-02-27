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
        const elementFront = document.getElementById(id + 'front')
        const elementBack = document.getElementById(id + 'back')


        if (elementFront && elementBack && elementFront.style.display === "none") {
            elementFront.style.display = "flex"
            elementBack.style.display = 'none'
        }
        else if (elementFront && elementBack && elementFront.style.display !== "none") {
            elementFront.style.display = "none"
            elementBack.style.display = "block"
        }
    }

    return (
        <div title="Щелкните по рецепту, чтобы открыть"
            className='flex justify-center m-1 overflow-hidden text-white border-2 lg:w-1/5 md:w-1/4 h-min bg-bg3 rounded-xl border-bg1'>

            <div className='flex-col content-center self-start justify-center hidden w-full' style={{ display: "none" }} id={recipeName + 'front'}>

                <div className='text-center rounded-t-lg bg-bg2'>{recipeName}</div>

                <div className='flex justify-center'>
                    <button className='p-1 py-0 my-1 border-2 bg-bg2 rounded-xl border-bg1' onClick={() => loadRecipe(recipeName)}>Загрузить</button>
                    <button className='p-1 py-0 my-1 border-2 bg-bg2 rounded-xl border-bg1' onClick={() => dispatch(handleRecipeDelete(recipeName))}>Удалить</button>
                    <button className='p-1 py-0 my-1 border-2 bg-bg2 rounded-xl border-bg1' onClick={() => handleRecipeOpen(recipeName)}>Скрыть</button>
                </div>

                <div className='flex flex-col flex-wrap justify-center h-auto m-2 text-left text-ellipsis'>
                    <div className='flex flex-row flex-wrap p-2 border-2 bg-bg2 rounded-xl border-bg1'>
                        <div>Общий объем жидкости: </div>
                        <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.liquidVolume}мл</div>

                        <div>Нужно добавить пропиленгликоля: </div>
                        <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.pgVolume.toFixed(2)}мл</div>

                        <div>Нужно добавить глицерина: </div>
                        <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.vgVolume.toFixed(2)}мл</div>

                        <div>Нужно добавить никотина: </div>
                        <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.nicotineVolume.toFixed(2)}мл</div>

                        <div>Общий объем ароматизаторов: </div>
                        <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.overallFlavorsVolume.toFixed(2)}мл</div>
                    </div>

                    <div className='p-2 mt-2 border-2 bg-bg3 rounded-xl border-bg1'>
                        <div>Объемы ароматизаторов:</div>
                        <div>{
                            recipeDescription.selectedFlavorsVolumes!.length !== 0 ?
                                recipeDescription.selectedFlavorsVolumes!.map(f => {
                                    return (
                                        <div className='p-2 my-1 border-2 bg-bg2 rounded-xl border-bg1'
                                            key={f.engName}>
                                            <span>{f.engName}</span>
                                            <span> {f.flavoringPercent.toFixed(2)}%</span>
                                            <span> {f.flavoringVolume.toFixed(2)} мл или</span>
                                            <span> {f.flavoringVolumeDrops.toFixed(0)} кап</span>
                                        </div>)
                                }) : <></>}
                        </div>
                    </div>
                </div>


            </div>

            <button className='block w-full text-center h-60' onClick={() => handleRecipeOpen(recipeName)} id={recipeName + 'back'}>
                {recipeName}
            </button>

        </div>
    )
}
export default RecipeItem


