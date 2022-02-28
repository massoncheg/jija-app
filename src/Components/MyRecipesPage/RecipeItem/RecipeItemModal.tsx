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

interface RecipeItemModalProps {
    recipeName: string;
    recipeDescription: DescriptionState;
}

const handleRecipeOpen = (id: string) => {

    const modalBg = document.getElementById(id + 'modalBg')
    const modalContent = document.getElementById(id + 'modalContent')

    if (modalBg && modalContent && modalBg.style.display === "none") {
        modalBg.style.display = "block"
        modalContent.style.display = "flex"
    }
    else if (modalBg && modalContent && modalBg.style.display !== "none") {
        modalBg.style.display = "none"
        modalContent.style.display = "none"

        console.log(modalBg.style.display)
        console.log(modalContent.style.display)
    }
}

const RecipeItemModal = ({ recipeName, recipeDescription }: RecipeItemModalProps) => {

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



    return (
        <div
            className='hidden fixed z-[1] left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.3)]'
            style={{ display: "none" }}
            id={recipeName + 'modalBg'}
        >

            <div className='flex-col mt-[10%] rounded-xl z-10 text-bg5 hidden bg-bg3 content-center mx-auto h-min w-[80%] md:w-[50%]' style={{ display: "none" }} id={recipeName + 'modalContent'}>
                <div className='text-lg font-semibold text-center rounded-t-lg bg-bg2'>{recipeName}</div>
                <div className="pb-1">
                    <div className='flex justify-between h-16 px-4 text-lg font-bold'>
                        <button className='p-1 py-0 my-1 border-2 bg-bg2 rounded-xl border-bg1' onClick={() => loadRecipe(recipeName)}>Загрузить</button>
                        <button className='p-1 py-0 my-1 border-2 w-[40%] bg-bg2 rounded-xl border-bg1' onClick={() => handleRecipeOpen(recipeName)}>Закрыть</button>
                        <button className='p-1 py-0 my-1 border-2 bg-bg2 rounded-xl border-bg1' onClick={() => dispatch(handleRecipeDelete(recipeName))}>Удалить</button>
                    </div>
                    <div className='flex flex-col flex-wrap justify-center h-auto m-2 text-left text-ellipsis'>
                        <div className='flex flex-col flex-wrap justify-center border-2 md:p-2 bg-bg2 rounded-xl border-bg1'>
                            <div className='flex flex-row'>
                                <div>Общий объем жидкости: </div>
                                <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.liquidVolume}мл</div>
                            </div>
                            <div className='flex flex-row'>
                                <div>Нужно добавить пропиленгликоля: </div>
                                <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.pgVolume.toFixed(2)}мл</div>
                            </div>
                            <div className='flex flex-row'>
                                <div>Нужно добавить глицерина: </div>
                                <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.vgVolume.toFixed(2)}мл</div>
                            </div>
                            <div className='flex flex-row'>
                                <div>Нужно добавить никотина: </div>
                                <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.nicotineVolume.toFixed(2)}мл</div>
                            </div>
                            <div className='flex flex-row'>
                                <div>Общий объем ароматизаторов: </div>
                                <div className='px-1 mx-1 mb-2 rounded-md w-min bg-bg3'>{recipeDescription.overallFlavorsVolume.toFixed(2)}мл</div>
                            </div>
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
            </div>
        </div>
    )
}
export default RecipeItemModal


