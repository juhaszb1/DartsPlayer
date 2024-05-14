import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DartsPlayerSinglePage() {

    const params = useParams();
    const id = params.id;
    const [darts, setDarts] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            },
            url: `https://darts.sulla.hu/darts/${id}`
        })
            .then((res) => {
                setDarts(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Darts Player</h1>
            <div className="row" style={{ marginLeft: '480px' }}>
                <div key={darts.id} className="card" style={{ width: '18rem', marginBottom: '20px', marginLeft: '20px' }}>
                    <div className="card-body">
                        <h3 className="card-title">{darts.name}</h3>
                        <b className="card-title">Születési dátum: <p>{darts.birth_date}</p></b>
                        <b className="card-title">Világbajnokság nyereségek száma: {darts.world_ch_won}</b>
                        <br />
                        <br />
                        <b className="card-title">Profil: <a href={darts.profile_url} target="_blank">{darts.profile_url}</a></b>
                        <br />
                        <br />
                        <NavLink to={`/`}>
                            <img src={darts.image_url} className="card-img-top" alt="..." />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}