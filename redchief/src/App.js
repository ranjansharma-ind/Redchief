// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Card, CardBody, CardText } from 'react-bootstrap';
import image1 from './Images/redchief.png';
import image2 from './Images/furo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        There are two links in this QR Code
      </header>
      <div className='container'>
        <Container>
          <Row>
            <Col sm={6}>
              <Card className='card'>
                <CardBody>
                  <a href='https://redchief.in/furo-sports'><img src={image1} height={200} /></a>
                </CardBody>
                <CardText>Red Rechief</CardText>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className='card'>
                <CardBody>
                  <a href='https://redchief.in/furo-sports'><img src={image2} height={200} /></a>
                </CardBody>
                <CardText>Futo Sports</CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;