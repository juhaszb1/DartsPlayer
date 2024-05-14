import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function DartsPlayersPage() {

    const[darts, setDarts] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            },
            url: 'https://darts.sulla.hu/darts'
        })
            .then((res) => {
                setDarts(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Darts Players</h1>
            <div className="row">
                {
                    darts.map((item) => {
                        return (
                            <div key={item.id} className="card" style={{ width: '18rem', marginBottom: '20px', marginLeft: '20px' }}>
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <b className="card-title">Születési dátum: <p>{item.birth_date}</p></b>
                                    <b className="card-title">Világbajnokság nyereségek száma: {item.world_ch_won}</b>
                                    <br />
                                    <br />
                                    <b className="card-title">Profil: <a href={item.profile_url} target="_blank">{item.profile_url}</a></b>
                                    <br />
                                    <br />
                                    <NavLink key={item.id} to={`/darts/${item.id}`}>
                                        <img src={item.image_url} className="card-img-top" alt="..." />
                                    </NavLink>
                                    <br />
                                    <br />
                                    <NavLink key={item.id + 1} to={`/update-darts/${item.id}`}>
                                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                                    </NavLink>
                                    <NavLink key={item.id + 2} to={`/delete-darts/${item.id}`}>
                                        <i className="bi bi-trash mx-1 text-danger">Törlés</i>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}