import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img from '../img/sajad-nori-s1puI2BWQzQ-unsplash.jpg'

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={1} md={12} className="pb-5">
          <Image src={img} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;