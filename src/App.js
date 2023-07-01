import {BrowserRouter, Route, Routes} from "react-router-dom" 
import './App.css';
import Home from "./Components/Home/Home";
import Contacto from "./Components/Contacto/Contacto";
import Navbars from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
