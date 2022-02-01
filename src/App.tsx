import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './Components/Header/Header';
import MyRecipes from './Components/MyRecipesPage/MyRecipes'
import RecipeRedactor  from './Components/RecipeRedactor/RecipeRedactor';
import cls from './App.module.css';

const App = () => {
  return (

    <div className={cls.appWrapper}> 
      <Header />
      <div className={cls.appWrapperContent}>
      <Routes>
      <Route path="/my-recipes" element = {<MyRecipes/>}/>
      <Route path="/redactor" element = {<RecipeRedactor/>}/>
      </Routes>
      </div>
    </div>

  );
}
export default App;
