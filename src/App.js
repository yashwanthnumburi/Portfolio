import './App.css';
import Header from './Header';
import Info from './Info';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Experience from './components/Experience/Experience';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      {/* Later remove the br tag and added proper spacing */}
      <br/>
      <br/>
    <Info/>
     </div>
     </BrowserRouter>
  );
}

export default App;
