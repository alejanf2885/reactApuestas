import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import DetalleEquipo from "./components/DetalleEquipo";
import Jugadores from "./components/Jugadores";
import DetalleJugador from "./components/DetalleJugador";
import Apuestas from "./components/Apuestas";
import InsertApuesta from "./components/insertApuesta";

export default function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apuestas" element={<Apuestas/>} />
        <Route path="/apuestas/crear" element={<InsertApuesta/>} />
        <Route path="/equipo/:id" element={<DetalleEquipo/>} />
        <Route path="/jugador/:id" element={<DetalleJugador/>} />
        <Route path="/equipo/:id/jugadores" element={<Jugadores/>} />
      </Routes>
    </BrowserRouter>
  );
}
