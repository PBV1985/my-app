import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComp from './CarouselComp';
import DropdownComp from './DropdownComp';
import CardComp from './CardComp';
import CardImgComp from './CardImgComp';

function ResponsiveAutoExample() {
  return (
    <Container className='ContainerComp'>
      <Row className='section1'>
        <Col className='CarouselDropdown' sm={6}>
            <div><CarouselComp/></div><DropdownComp/></Col>
        <Col className='text' sm={5}><CardComp/></Col>
      </Row>
      <Row className='firstLine'>
        <Col sm><CardImgComp/></Col>
      </Row>
      <Row className='secondLine'>
        <Col sm><CardImgComp/></Col>
      </Row>
      <Row className='thirdLine'>
        <Col sm><CardImgComp/></Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;