import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Global } from "../Global";
import axios from "axios";

export default function Header() {

    const navigate = useNavigate()

    const url = Global.api

    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        loadEquipos()
    },[])

    const loadEquipos = () => {
        
        let request = 'api/Equipos'
        axios.get(url+request).then((response) => {
            setEquipos(response.data)
        })
    }
    
return (
    <header className="w-full bg-black">
        <div className="container max-w-7xl px-5 py-8 ">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 px-5"
                            : "text-white hover:text-yellow-300 px-5"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/apuestas"
                    className={ ({ isActive }) =>
                        isActive
                            ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 px-5"
                            : "text-white hover:text-yellow-300 px-5"
                    }
                >
                    Apuestas
                </NavLink>
                <select
                    onChange={e => navigate(`/equipo/${e.target.value}`)}
                    className="bg-white"
                    name=""
                    id=""
                >
                    {
                            equipos && equipos.length > 0 
                            ? (equipos.map((equipo,i)=>(
                                    <option key={i} value={equipo.idEquipo}>{equipo.nombre}</option>
                            )))
                            : (<option></option>)
                    }
                </select>
            </div>
        </div>
    </header>
);
}
