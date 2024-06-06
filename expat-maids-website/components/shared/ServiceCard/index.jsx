import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Domestic Worker Visa
        </Card.Title>
        <Card.Text>
          <div>
            <p>2 Years Residence Visa</p>
            <p>2 Years Residence Visa</p>
            <p>2 Years Residence Visa</p>
            <p>2 Years Residence Visa</p>
            <p>2 Years Residence Visa</p>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;