import React from 'react';  
import { Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import MyRecipes from './Components/MyRecipesPage/MyRecipes'
import RecipeRedactor from './Components/RecipeRedactor/RecipeRedactor';

import { useSelector } from 'react-redux';
import { RootState } from './Store/store';
import About from './Components/AboutPage/About';

const App = () => {
  const state: RootState = useSelector((state: RootState) => state)
  return (

    <div id="app" className="bg-bg4 h-screen">
      <Header />
      <main className="">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/my-recipes" element={<MyRecipes state={state.recipes} />} />
          <Route path="/redactor" element={<RecipeRedactor
            commonState={state.redactor.common}
            baseState={state.redactor.base}
            flavoringsState={state.redactor.flavorings}
            descriptionState={state.redactor.description}
          />}
          />
        </Routes>
      </main>
    </div>

  );
}
export default App;
