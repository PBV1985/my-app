import Card from "react-bootstrap/Card";

function WithHeaderAndQuoteExample() {
  return (
    <Card>
      <Card.Header className="footer bg-black-subtle sticky-xxl-bottom text-center">
      © Bogdan ITSchool 2023
      </Card.Header>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;
