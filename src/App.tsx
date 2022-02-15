import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import MyRecipes from './Components/MyRecipesPage/MyRecipes'
import RecipeRedactor from './Components/RecipeRedactor/RecipeRedactor';
import cls from './App.module.css';
import { useSelector } from 'react-redux';
import { RootState } from './Store/store';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  return (

    <div className={cls.appWrapper}>
      <Header />
      <div className={cls.appWrapperContent}>
        <Routes>
          <Route path="/my-recipes" element={<MyRecipes state={state.recipes} />} />
          <Route path="/redactor" element={<RecipeRedactor
            commonState={state.common}
            baseState={state.base}
            flavoringsState={state.flavorings}
            descriptionState={state.description}
          />}
          />
        </Routes>
      </div>
    </div>

  );
}
export default App;
