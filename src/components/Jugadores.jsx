import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { Global } from "../Global";
import { useEffect, useState } from "react";

export default function Jugadores() {
  const url = Global.api;

  const [jugadores, setJugadores] = useState([]);

 

  const { id } = useParams();

   useEffect(() => {
    loadJugadores();
  }, [id]);

  const loadJugadores = () => {
    let request = "api/Jugadores/JugadoresEquipos/" + id;

    axios.get(url + request).then((response) => {
      setJugadores(response.data);
    });
  };

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
            <NavLink to='/'
            className='bg-green-500 px-3 py-1 rounded-full text-white'
            >
                Volver
            </NavLink>
            <div className="mt-6">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jugadores && jugadores.length > 0 ? (
                            jugadores.map(jugador => (
                                <tr key={jugador.idJugador} className="border-b">
                                    <td>
                                        <img
                                            src={jugador.imagen}
                                            alt={jugador.nombre}
                                            className="w-16 h-16 object-cover rounded-full mx-auto"
                                        />
                                    </td>
                                    <td>{jugador.nombre}</td>
                                    <td>
                                        <NavLink
                                            to={`/jugador/${jugador.idJugador}`}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        >
                                            Ver Detalles
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No hay jugadores disponibles.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
}
