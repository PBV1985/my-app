import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComp from './CarouselComp';
import DropdownComp from './DropdownComp';
import CardComp from './CardComp';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row className='section1'>
        <Col className='CarouselDropdown' sm={6}>
            <div><CarouselComp/></div><DropdownComp/></Col>
        <Col className='text' sm={5}><CardComp/></Col>
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