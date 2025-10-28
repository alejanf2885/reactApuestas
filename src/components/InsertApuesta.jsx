import axios from "axios";
import { useRef } from "react";
import { Global } from "../Global";
import { useNavigate } from "react-router-dom";

export default function InsertApuesta() {
  const url = Global.api;
  const navigate = useNavigate();

  const usuarioRef = useRef();
  const realMadridResultadoRef = useRef();
  const atleticoDeMadridResultadoRef = useRef();
  const fechaRef = useRef();

  const createApuesta = (event) => {
    event.preventDefault();

    const request = "api/Apuestas";

    const apuesta = {
      idApuesta: 0,
      usuario: usuarioRef.current.value,
      resultado:
        realMadridResultadoRef.current.value +
        "-" +
        atleticoDeMadridResultadoRef.current.value,
      fecha: fechaRef.current.value,
    };

    axios.post(url + request, apuesta).then(() => {
      navigate("/apuestas");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Crear nueva apuesta
        </h2>

        <form onSubmit={createApuesta} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Usuario
            </label>
            <input
              type="text"
              ref={usuarioRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Introduce tu usuario"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Real Madrid
              </label>
              <input
                type="number"
                ref={realMadridResultadoRef}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Goles RM"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Atlético de Madrid
              </label>
              <input
                type="number"
                ref={atleticoDeMadridResultadoRef}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Goles ATM"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Fecha</label>
            <input
              type="text"
              ref={fechaRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Guardar Apuesta
          </button>
        </form>
      </div>
    </div>
  );
}
