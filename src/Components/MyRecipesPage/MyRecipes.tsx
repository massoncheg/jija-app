import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLibraryClear, MyRecipesState } from "../../Store/Slices/MyRecipes/myRecipesSlice";


import RecipeItem from "./RecipeItem/RecipeItem";


const MyRecipes = ({ state }: { state: MyRecipesState }) => {


    const dispatch = useDispatch()
    const recipeItems = state.savedRecipes
    return (
        <div>
        
        {recipeItems.length !== 0 ? 
            <div className='grid grid-cols-1 md:grid-cols-5 grid-rows-auto'>
            {recipeItems.map((item) => <RecipeItem recipeName = {item.name} recipeDescription={item.description}/>)}
            </div>
            : <div className='text-center mx-auto my-4 text-lg'>There are no recipes yet, try  to create one <Link className='bg-bg2 px-2 text-white rounded-lg hover:bg-bg3' to="/redactor">here</Link> :^)</div> }       

        
        <div className='w-min text-white rounded-lg bg-bg2 mt-16 mx-auto hover:bg-bg3'>
            <button className='w-60 px-2'  onClick={() => dispatch(handleLibraryClear())}>Очистить хранилище</button>
        </div>
        </div>
    )
}
export default MyRecipes