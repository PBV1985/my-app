import Alert from 'react-bootstrap/Alert';

function LinksExample() {
  return (
    <>
      {[
        
        'light'
        
      ].map((variant) => (
        <Alert  className=' text-center'  key={variant} variant={variant}>
          This is overview
          
        </Alert>
      ))}
    </>
  );
}

export default LinksExample;