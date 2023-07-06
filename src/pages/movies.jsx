import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoviesActorComp from '../components/MoviesActorComp'
import ImageComp from '../components/ImageComp';
import TextComp from '../components/OverviewComp';





export const Movies = () =>{
    return ( <Container>
        <Row><h3>Movie</h3>
          <Col>
        <ImageComp/>
          
          </Col>
          <Col><TextComp/></Col>
        </Row>
        <Row><h3>Actors</h3>
          <Col><br></br><MoviesActorComp/></Col>
          
        </Row>
      </Container> 
    );
}