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
      <div className='Main'>
        <div className='container'>
          <Container>
            <Row>
              <Col sm={6}>
                <Card className='card'>
                  <CardBody>
                    <a href='https://redchief.in/'><img src={image1} height={200} /></a>
                  </CardBody>
                  <CardText>Redchief</CardText>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className='card'>
                  <CardBody>
                    <a href='https://redchief.in/furo/home'><img src={image2} height={200} /></a>
                  </CardBody>
                  <CardText>Furo Sports</CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>

  );
}

export default App;
