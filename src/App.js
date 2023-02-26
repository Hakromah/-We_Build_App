import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contacts from './components/Contacts';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import Services from './components/Services';

function App() {
  return (

    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element ={<Home/>}/>
      <Route exact path="/about" element ={<About/>}/>
      <Route exact path="/service" element ={<Services/>}/>
      <Route exact path="/pages" element ={<Pages/>}/>
      <Route exact path="/contact" element ={<Contacts/>}/>
    </Routes>
    </div>
  );
}

export default App;
