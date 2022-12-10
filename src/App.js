import './App.css';
import Home from './pages/Home';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import {Route} from "wouter"



function App() {
  return (
    <div className="App">
      <Route path='/' component={Home}/>
      <Route path='/2' component={Step2}/>
      <Route path='/3' component={Step3}/>
      <Route path='/4' component={Step4}/>
    </div>
  );
}

export default App;
