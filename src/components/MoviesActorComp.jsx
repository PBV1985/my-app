import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { config } from '../api/config.js';

const baseURL = config.apiBaseUrl
const apiKey = config.apiKey
const imgURL = config.ImageBaseUrl;


function GridExample() {
  const [movies, setMovies] = useState([]);
  useEffect (() => {
    fetch(`${baseURL}discover/movie?api_key=${apiKey}`)
    .then ((response)=>response.json())
    .then ((data)=>{
      setMovies(data.results)
    });
  },[]);


  return (

 <Row xs={1} md={4} className="g-4 ">
{
 movies&&
movies.map((movie) => {
 return(
  <Col className='col-sm d-flex' key={movie.id}>
    <Card className=''>
      <Card.Img variant="top" src={`${imgURL}${movie.poster_path}`} alt='movie'/>
    </Card>
  </Col>
);
 })
 }
</Row> 
 
  );
}

export default GridExample;