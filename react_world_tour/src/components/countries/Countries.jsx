import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const markVisited = (id) =>{
            fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(res => res.json())
            .then(data =>{
                const newVisitedCountries = data[0];
                setVisitedCountries([...visitedCountries, newVisitedCountries]);
            });
        
        
    }

    const addFlag =(id)=>{
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(res => res.json())
            .then(data => {
                const newVisitedFlags = data[0];
                setVisitedFlags([...visitedFlags, newVisitedFlags]);
            });
    }
    return (
        
        <div>
            <h3>Countries:- {countries.length}</h3>
            <div>
                <h3>Visited Countries :- {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div>
                <h3>Visited Flags :- {visitedFlags.length}</h3>
                
                    <div className="flagContainer">
                    {
                        visitedFlags.map((country, idx) => <img key={idx} src={country.flags.png}></img>)
                    }
                    </div>
                
            </div>
            <div className="countryContainer">
                {
                    countries.map(country => <Country country={country} markVisited={markVisited} addFlag={addFlag}> </Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;