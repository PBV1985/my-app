import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImgComp from '..//components/CardImgComp';
import ImageComp from '../components/ImageComp';





export const Movies = () =>{
    return ( <Container>
        <Row>
          <Col>
        <ImageComp/>
          

          </Col>
          <Col>acesta este un paragraf</Col>
        </Row>
        <Row>
          <Col><CardImgComp/></Col>
          
        </Row>
      </Container> 
    );
}