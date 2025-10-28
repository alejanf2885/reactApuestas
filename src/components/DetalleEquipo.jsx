import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { Global } from "../Global";
import axios from "axios";

export default function DetalleEquipo() {

    const url = Global.api

    const {id} = useParams();

    const [equipo,setEquipo] = useState(null);


    useEffect(() => {
        loadEquipo()
    },[id])

    const loadEquipo = () => {
        let request = 'api/Equipos/' + id;

        axios.get(url+request).then((response) => {
            setEquipo(response.data)
        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {equipo ? (
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                    <img
                        src={equipo.imagen}
                        alt={equipo.nombre}
                        className="mx-auto mb-4 rounded-md w-48 h-48 object-cover border"
                    />
                    <h1 className="text-2xl font-bold mb-2 text-gray-800">{equipo.nombre}</h1>
                    <div className="mb-2">
                        <span className="font-semibold text-gray-600">Champions:</span>{" "}
                        <span className="text-gray-700">{equipo.champions}</span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold text-gray-600">Finalista:</span>{" "}
                        <span className="text-gray-700">{equipo.finalista}</span>
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold text-gray-600">Descripción:</span>
                        <p className="text-gray-700 mt-1">{equipo.descripcion}</p>
                    </div>
                    <a
                        href={equipo.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Sitio web oficial
                    </a>
                    <NavLink
                            to={`/equipo/${equipo.idEquipo}/jugadores`}
                        className="inline-block mx-3 mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                        Ver jugadores
                    </NavLink>
                </div>
            ) : (
                <h1 className="text-xl font-semibold text-gray-700">No se encontró equipo</h1>
            )}
        </div>
    );
    
};
