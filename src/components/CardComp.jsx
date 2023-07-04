import Card from 'react-bootstrap/Card';
import ButtonComp from './ButtonComp';
import '../css/cardComp.css'


function BgColorExample() {
  return (
    <>
      {['Info'].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '25rem'}}
          className="mb-2 CardColor "
        >
          <Card.Header className='bg-dark-subtle '><h1 className='classDiscover'>Discover the world of movies!</h1></Card.Header>
          <Card.Body className='bg-dark-subtle'>
            <Card.Title></Card.Title>
            <Card.Text className='text-center'>
            <ButtonComp/>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;