import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadRecipeFromLocalStorage from "../../../Common/loadRecipeFromLocalStorage";
import { handleNameChange } from "../../../Store/Slices/commonSlice";
import { handleRecipeDelete } from "../../../Store/Slices/MyRecipes/myRecipesSlice";
import { setBaseState } from "../../../Store/Slices/RecipeRedactor/baseSlice";
import { DescriptionState, setDescriptionState } from "../../../Store/Slices/RecipeRedactor/descriptionSlice";
import { setFlavoringsState } from "../../../Store/Slices/RecipeRedactor/flavoringsSlice";
import { RecipeState } from "../../../Store/store";

import cls from "./RecipeItem.module.css"

// Компонент принимает в себя параметры рецепта и выдает карточку с названием, картинкой и описанием рецепта

interface RecipeItemProps {
    recipeName: string;
    recipeDescription: DescriptionState;
}


const RecipeItem = ({ recipeName, recipeDescription }: RecipeItemProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadRecipe = (name: string) => {
        const loadedState: RecipeState | undefined = loadRecipeFromLocalStorage(name)
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

        console.log(elementFront)
        console.log(elementBack)

        if (elementFront && elementBack && elementFront.style.display === "none") {
            elementFront.style.display = "block"
            elementBack.style.display = 'none'
        }
        else if (elementFront && elementBack && elementFront.style.display !== "none") {
            elementFront.style.display = "none"
            elementBack.style.display = 'flex'
        }
    }

    return (
        <div title="Щелкните по рецепту, чтобы открыть"
            className='h-min w-min m-2 text-white bg-bg3 rounded-xl border-2 border-bg1'>

            <div className='hidden w-60' id={recipeName + 'front'}>
                <div className='bg-bg2 rounded-t-lg text-center'>{recipeName}</div>

                <div className='text-left h-auto text-ellipsis m-2'>
                    <div className='p-2 bg-bg2 rounded-xl border-2 border-bg1'>
                        <div>Общий объем жидкости: {recipeDescription.liquidVolume}мл</div>
                        <div>Нужно добавить пропиленгликоля: {recipeDescription.pgVolume.toFixed(2)}мл</div>
                        <div>Нужно добавить глицерина: {recipeDescription.vgVolume.toFixed(2)}мл</div>
                        <div>Нужно добавить никотина: {recipeDescription.nicotineVolume.toFixed(2)}мл</div>
                        <div>Общий объем ароматизаторов: {recipeDescription.overallFlavorsVolume.toFixed(2)}мл</div>
                    </div>

                    <div className='p-2 bg-bg3 rounded-xl border-2 border-bg1 mt-2'>
                        <div>Объемы ароматизаторов:</div>
                        <div>{
                            recipeDescription.selectedFlavorsVolumes!.length !== 0 ?
                                recipeDescription.selectedFlavorsVolumes!.map(f => {
                                    return (
                                        <div className='p-2 bg-bg2 rounded-xl border-2 border-bg1 my-1'
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

                <div className='mx-auto'>
                    <button className='p-1 py-0 bg-bg2 rounded-xl border-2 border-bg1 my-1' onClick={() => loadRecipe(recipeName)}>Загрузить</button>
                    <button className='p-1 py-0 bg-bg2 rounded-xl border-2 border-bg1 my-1' onClick={() => dispatch(handleRecipeDelete(recipeName))}>Удалить</button>
                    <button className='p-1 py-0 bg-bg2 rounded-xl border-2 border-bg1 my-1' onClick={() => handleRecipeOpen(recipeName)}>Скрыть</button>
                </div>
            </div>

            <div className='w-60 h-60 flex justify-center content-center' id={recipeName + 'back'}>
                <button className='flex w-auto h-auto' onClick={() => handleRecipeOpen(recipeName)}>
                    {recipeName}
                </button>
            </div>

        </div>
    )
}
export default RecipeItem


