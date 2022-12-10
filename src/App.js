import './App.css';
import Home from './pages/Home';
import Step2 from './pages/Step2';
import {Route} from "wouter"



function App() {
  return (
    <div className="App">
      <Route path='/' component={Home}/>
      <Route path='/2' component={Step2}/>
    </div>
    
  );
}

export default App;
