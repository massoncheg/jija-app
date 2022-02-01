import React from "react"; 
import { Link } from "react-router-dom";

import RecipeItem from "./RecipeItem/RecipeItem";

interface MyRecipesProps {
    recipeItems?: Array<{recipeName?: string}>
}

const MyRecipes = ({recipeItems}: MyRecipesProps) => {
    
    
    return (
        <div>
        {/* <RecipeItem recipeName = {"Test"}/> */}
        {recipeItems ? recipeItems.map((r) => <RecipeItem recipeName = {r.recipeName}/>) : <div>There are no recipes yet, try  to create one <Link to="/redactor?n=new-recipe">here</Link> :^)</div> }       
        </div>
    )
}
export default MyRecipes