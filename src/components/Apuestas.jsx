import { useEffect, useState } from "react";
import { Global } from "../Global";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Apuestas() {
  const url = Global.api;
  const [apuestas, setApuestas] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    loadApuestas();
  }, []);

  const loadApuestas = () => {
    let request = "api/Apuestas";
    axios.get(url + request).then((response) => {
      setApuestas(response.data);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
           Lista de Apuestas
        </h2>
       <div className=" flex justify-center">
         <button onClick={() => navigate('/apuestas/crear')} className="bg-red-500 text-white hover:cursor-pointer px-3 py-2 rounded-full my-3">
            Realizar apuesta
        </button>
       </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Usuario</th>
                <th className="py-3 px-4 text-left font-semibold">Resultado</th>
                <th className="py-3 px-4 text-left font-semibold">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {apuestas && apuestas.length > 0 ? (
                apuestas.map((apuesta, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="py-3 px-4 border-t border-gray-200 text-gray-700">
                      {apuesta.usuario}
                    </td>
                    <td className="py-3 px-4 border-t border-gray-200 text-gray-700">
                      {apuesta.resultado}
                    </td>
                    <td className="py-3 px-4 border-t border-gray-200 text-gray-700">
                      {apuesta.fecha}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-4 text-center text-gray-500 italic border-t"
                  >
                    No hay apuestas registradas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
