import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import Footer from "components/footer/footer";
import NavBar from "components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <div className='p-5'>
        <h2>Pizzas</h2>
      </div>

        <div className='row px-3'> 
        {/* faz a lista lateralmente*/}
        <Row>
          {/*dá a possibilidade de por os intens lado a lado */}
          <Col>
          <Container>
            <Card style={{ width: '18rem' , margin: "20px"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Pizza de calabresa</Card.Title>
                <Card.Text>
                Uma deliciosa pizza comberta do mais chique queijo e requintada com nosso melhores
                pedaçoes de calabresa para a sua satisfação
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Container>
          </Col>
          {/* onde acaba o card 1 e começa o card 2 */}
          <Col>
          <Container>
            <Card style={{ width: '18rem' , margin: "20px"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Pizza de Frango com Catupiry</Card.Title>
                <Card.Text>
                Nossa melhar massa rechada por um delicioso frango desfiafo e comberto
                com catupiry
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Container>
          </Col>
          </Row>
        </div>
         
      <Footer/>
    </>
  );
}

export default App;
