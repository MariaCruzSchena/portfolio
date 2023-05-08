import Home from "./pages/home/";
import Details from "./pages/home/Details";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar";

function App() {
  return (
    <div id="app" style={{display:"flex", flexDirection:"row-reverse", justifyContent:"flex-start", alignItems:"center"}}>
      <Navbar />      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
