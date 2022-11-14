import axios from "axios";
import {useEffect, useState} from "react";
import "./Characters.css";
import {Link} from "react-router-dom";
import Filter from "../../components/Filter";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [characterFiltered, setCharacterFiltered] = useState([]);
    useEffect(() => {
        const getDataDB = async () => {
            const {data} = await axios.get("https://dragon-ball-super-api.herokuapp.com/api/characters");
            console.log(data);
            setCharacters(data);
            setCharacterFiltered(data);
        }
        getDataDB();
    }, []);

    const searchCharacters = (name) => {
        const filtered = characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
        setCharacterFiltered(filtered);

    }
    return (
        <div>
        <Filter setSearch={searchCharacters}></Filter>
        <div className="container">
            {characterFiltered.map((item, index) => {
                return(
                    <div className="card" key={index}>
                <h3 className="name">{item.name}</h3>
                <img className="img" src={item.imageUrl} alt="imagen"></img>
                <button className="btn"><Link className="enlace"  to={`/characters/${item.name}`}> <h4>Más Info</h4></Link></button>
                </div>
                )
    
            })}
        </div>
        </div>
    )

}

export default Characters;