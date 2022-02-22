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
                <div className='flex flex-wrap gap-4 md:flex-row flex-col place-content-center'>
                    {recipeItems.map((item) => <RecipeItem recipeName={item.name} key={item.name} recipeDescription={item.description} />)}
                </div>
                : <div className='text-center mx-auto my-4 text-lg'>
                    {language === 'ru' ?
                        "Сохраненных рецептов еще нет, попробуйте создать один"
                        : "There are no recipes yet, try to create one"
                    }
                    <Link className='bg-bg2 px-2 mx-1 text-white rounded-lg hover:bg-bg3' to="/redactor">
                        {language === 'ru' ?
                            "здесь"
                            : "here"
                        }

                    </Link> :^)
                </div>
            }


            <div className='w-min text-white rounded-lg bg-bg2 mt-16 mx-auto hover:bg-bg3'>
                <button className='w-max px-4' onClick={() => dispatch(handleLibraryClear())}>
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