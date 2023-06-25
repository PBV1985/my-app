import Card from 'react-bootstrap/Card';
import ButtonComp from './ButtonComp'

function BgColorExample() {
  return (
    <>
      {['Info'].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '25rem' }}
          className="mb-2"
        >
          <Card.Header><h1>Discover the world of movies!</h1></Card.Header>
          <Card.Body>
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