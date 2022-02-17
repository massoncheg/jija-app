import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLibraryClear, MyRecipesState } from "../../Store/Slices/MyRecipes/myRecipesSlice";
import { RecipeState, RootState } from "../../Store/store";

import RecipeItem from "./RecipeItem/RecipeItem";


const MyRecipes = ({ state }: { state: MyRecipesState }) => {


    const dispatch = useDispatch()
    const recipeItems = state.savedRecipes
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-5 grid-rows-auto'>
        {recipeItems.length !== 0 ? recipeItems.map((item) => <RecipeItem recipeName = {item.name} recipeDescription={item.description}/>) : <div>There are no recipes yet, try  to create one <Link to="/redactor">here</Link> :^)</div> }       
        </div>
        <div className='bg-bg2 mt-16'>
            <button onClick={() => dispatch(handleLibraryClear())}>Очистить localStorage</button>
        </div>
        </div>
    )
}
export default MyRecipes