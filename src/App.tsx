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

    <div id="app" className="bg-bg4 min-h-screen">
      <Header language={state.global.language}/>
      <main className="min-h-max">
        <Routes>
          <Route path="/about" element={<About language={state.global.language}/>} />
          <Route path="/my-recipes" element={<MyRecipes state={state.recipes} language={state.global.language}/>} />
          <Route path="/redactor" element={<RecipeRedactor
            commonState={state.redactor.common}
            baseState={state.redactor.base}
            flavoringsState={state.redactor.flavorings}
            descriptionState={state.redactor.description}
            language={state.global.language}
          />}
          />
        </Routes>
      </main>
    </div>

  );
}
export default App;
