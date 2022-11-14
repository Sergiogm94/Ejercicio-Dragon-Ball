import axios from "axios";
import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Character-detail.css";


const CharacterDetail = () => {
    const {idCharacters} = useParams();
    const [useCharacter, setUseCharacter] = useState();
    const navigate = useNavigate();
    console.log(idCharacters)
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://dragon-ball-super-api.herokuapp.com/api/characters/${idCharacters}`);
            console.log(data);
            setUseCharacter(data);
        }
        getData();
    }, []);
    return(
        <div className="container2">
                  
            <div>
                <h3 className="name2">{useCharacter?.name}</h3>
                <img className="img" src={useCharacter?.imageUrl} alt="imagen"></img>
                <div className="datos">
                <p>Planeta: {useCharacter?.originplanet}</p>
                <p>Rol: {useCharacter?.role}</p>
                <p>Especie: {useCharacter?.specie}</p>
                <p>Status: {useCharacter?.status}</p>
                <p>Universo: {useCharacter?.universe}</p>
                </div>
                <button className="button" onClick={() =>navigate("/characters")}></button>
            </div>
    </div>
    )
}

export default CharacterDetail;