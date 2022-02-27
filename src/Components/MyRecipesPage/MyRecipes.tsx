import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLibraryClear, MyRecipesState } from "../../Store/Slices/MyRecipes/myRecipesSlice";


import RecipeItem from "./RecipeItem/RecipeItem";

interface MyRecipesProps {
    language: string;
    state: MyRecipesState;
}

const MyRecipes = ({ language, state }: MyRecipesProps) => {


    const dispatch = useDispatch()
    const recipeItems = state.savedRecipes
    return (
        <div className="bg-bg4">

            {recipeItems.length !== 0 ?
                <div className='flex flex-col flex-wrap gap-4 md:flex-row place-content-center'>
                    {recipeItems.map((item) => <RecipeItem recipeName={item.name} key={item.name} recipeDescription={item.description} />)}
                </div>
                : <div className='mx-auto my-4 text-lg text-center'>
                    {language === 'ru' ?
                        "Сохраненных рецептов еще нет, попробуйте создать один"
                        : "There are no recipes yet, try to create one"
                    }
                    <Link className='px-2 mx-1 text-white rounded-lg bg-bg2 hover:bg-bg3' to="/redactor">
                        {language === 'ru' ?
                            "здесь"
                            : "here"
                        }

                    </Link> :^)
                </div>
            }


            <div className='mx-auto mt-16 text-white rounded-lg w-min bg-bg2 hover:bg-bg3'>
                <button className='px-4 w-max' onClick={() => dispatch(handleLibraryClear())}>
                    {language === 'ru' ?
                        "Очистить хранилище"
                        : "Clear library"
                    }
                </button>
            </div>
        </div>
    )
}
export default MyRecipes