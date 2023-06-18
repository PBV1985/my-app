import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComp from './CarouselComp'
import DropdownComp from './DropdownComp'

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col className='CarouselDropdown' sm={6}>
            <div><CarouselComp/></div><DropdownComp/></Col>
        <Col className='text' sm={4}><h1>Discover the world of movies!</h1></Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;