import Card from 'react-bootstrap/Card';

function BgColorExample() {
  return (
    <>
      {['Secondary'].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '25rem' }}
          className="mb-2"
        >
          <Card.Header><h1>Discover the world of movies!</h1></Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;