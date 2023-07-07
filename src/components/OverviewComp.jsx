import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react";
import { config } from '../api/config.js';

const baseURL = config.apiBaseUrl
const apiKey = config.apiKey


function Text() {
  const [movies, setMovies] = useState([]);
  useEffect (() => {
    fetch(`${baseURL}discover/movie?api_key=${apiKey}`)
    .then ((response)=>response.json())
    .then ((data)=>{
      setMovies(data.results)
    });
  },[]);

  return (
    <>
      {movies.map((movie) => (
        <Alert  className=' text-center'  key={movie.id}>
          <p>{movie.overview}</p>
          
        </Alert>
      ))}
    </>
  );
}

export default Text;