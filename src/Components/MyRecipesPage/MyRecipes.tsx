import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLibraryClear, MyRecipesState } from "../../Store/Slices/MyRecipes/myRecipesSlice";
import { RecipeState, RootState } from "../../Store/store";

import RecipeItem from "./RecipeItem/RecipeItem";


const MyRecipes = () => {
        
    const state: MyRecipesState = useSelector((state: RootState) => state.recipes)
    const dispatch = useDispatch()
    const recipeItems = state.savedRecipes
    return (
        <div>
        {recipeItems.length !== 0 ? recipeItems.map((item) => <RecipeItem recipeName = {item.name} recipeDescription={item.description}/>) : <div>There are no recipes yet, try  to create one <Link to="/redactor">here</Link> :^)</div> }       
        <button onClick={() => dispatch(handleLibraryClear())}>Очистить localStorage</button>
        
        </div>
    )
}
export default MyRecipes