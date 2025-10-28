import { useEffect, useState } from "react";
import { Global } from "../Global";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

export default function DetalleJugador() {
  const url = Global.api;

  const { id } = useParams();

  const [jugador, setJugador] = useState(null);

  const loadJugador = () => {
    let request = "api/Jugadores/" + id;

    axios.get(url + request).then((response) => {
      setJugador(response.data);
    });
  };

  useEffect(() => {
    loadJugador();
  }, [id]);

return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <NavLink
            to={`/equipo/${jugador ? jugador.idEquipo : ""}/jugadores`}
            className="bg-green-500 px-3 py-1 rounded-full text-white"
        >
            Volver
        </NavLink>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
            {jugador ? (
                <>
                    <img
                        src={jugador.imagen}
                        alt={jugador.nombre}
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-gray-300"
                    />
                    <h2 className="text-2xl font-bold mb-2">{jugador.nombre}</h2>
                    <p className="text-gray-600 mb-1">
                        <span className="font-semibold">Posición:</span>{" "}
                        {jugador.posicion}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <span className="font-semibold">Fecha de nacimiento:</span>{" "}
                        {jugador.fechaNacimiento}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <span className="font-semibold">País:</span> {jugador.pais}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">ID Equipo:</span>{" "}
                        {jugador.idEquipo}
                    </p>
                </>
            ) : (
                <p>Cargando jugador...</p>
            )}
        </div>
    </div>
);
}
