import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFetch } from '../hooks/useFetch.js';
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



  const page = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=aae82f25eea93b800ba7549728401380');
  //const movies=page.results
  //console.log(page.results);
  return (
    
    //  <Row xs={1} md={3} className="g-4">
    //    {
    //    Array.from({length:12}).map((_,idx) => {
    //     return(
    //      <Col key={idx}>
    //        <Card>
    //          <Card.Img variant="top" src={img1} />
    //          <Card.Body>
    //            <Card.Title>movie.title</Card.Title>
               
    //            <Card.Text>
    //            movie.release_date
    //            </Card.Text>
    //          </Card.Body>
                
    //        </Card>
    //      </Col>
    //    );
    //     })
    //     }
    //  </Row>





 <Row xs={1} md={4} className="g-4">
{
 movies&&
movies.map((movie) => {
 return(
  <Col key={movie.id}>
    <Card>
      <Card.Img variant="top" src={`${imgURL}${movie.poster_path}`} alt='movie'/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <Card.Text>
        {movie.release_date}
        </Card.Text>
      </Card.Body>
         
    </Card>
  </Col>
);
 })
 }
</Row> 



    
  );
}

export default GridExample;