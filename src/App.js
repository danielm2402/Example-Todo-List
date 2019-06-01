import React from 'react';
import NuevaTarea from './components/NuevaTarea';
import store from './store';
import { Provider } from 'react-redux';
import Tareas from "./components/Tareas"
import ActualizarTarea from "./components/ActualizarTarea";
import './App.css';
import ParticlesContainer from "./components/ParticlesContainer";

import {BrowserRouter, Route, Switch, Redirect, Link} from "react-router-dom"

const press=()=>{
  //{true && <Redirect to={Tareas} />}
  
}

function App() {
  return (
    
    <Provider store={store}>
    
    <nav className=" navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <span className="badge badge-pill badge-light ml-2">
                R E D U X and R E A C T
            </span>
          </a>
        </nav>
       
      <BrowserRouter>
      
      
          <Route exact path='/' component={Tareas}></Route>
          <Route exact path='/NuevaTarea' component={NuevaTarea}></Route>
          <Route exact path='/ActualizarTarea' component={ActualizarTarea}></Route>
          
          
      
      </BrowserRouter>
      <ParticlesContainer />
    </Provider>
  );
}

export default App;
