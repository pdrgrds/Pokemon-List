import './App.css';
import { Routes, Route } from "react-router-dom";
import DetalleHabilidad from './pages/DetalleHabilidad';
import DetallePokemon from './pages/DetallePokemon';
import Inicio from './pages/Inicio';
import Header from './Components/Global/header';
import Search from './Components/Global/search';

const App = (props:any) => {
  return (
    <div className="App">
      <Header />
      {/*<Search /> */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/search/:pokemon"  element={<Inicio/>} />
        <Route path="/pokemon/:id" element={<DetallePokemon />} />
        <Route path="/ability/:id" element={<DetalleHabilidad />} />
      </Routes>
    </div>
  );
}

export default App;
