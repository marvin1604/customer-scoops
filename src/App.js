import React from 'react';
import {Route} from "wouter"
import MyProvider from './hooks/provider';
import Home from './pages/Home';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import './App.css';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Route path='/' component={Home}/>
        <Route path='/2' component={Step2}/>
        <Route path='/3' component={Step3}/>
        <Route path='/4' component={Step4}/>
      </div>
    </MyProvider>
  );
}

export default App;
