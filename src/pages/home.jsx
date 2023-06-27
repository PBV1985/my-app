
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComp from '../components/CarouselComp';
import DropdownComp from '../components/DropdownComp';
import CardComp from '../components/CardComp';
import CardImgComp from '../components/CardImgComp';

export const Home = () =>{
    return (<div className='ContainerComp'>
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
    </div>   
    );
}
