import { useState } from 'react';
import './Country.css'
const Country = ({ country, markVisited, addFlag}) => {
    const { name, flags, area, cca2, population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return ( 
        <div className={`country ${visited ? "visited" : 'going'}`}>
            <h2>Name- {name?.common}</h2>
            <img src={flags?.png} alt="" />
            <p>Area:- {area}</p>
            <p>Population:- {population}</p>
            <p>Code:- {cca2}</p>
            <button onClick={() => markVisited(cca2)}>Mark Visited</button>
            <button onClick={() => { addFlag (cca2)}}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'Visited This Country' : 'I want to visit'}</p>
        </div>
    );
};

export default Country;