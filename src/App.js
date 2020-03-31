import React, { Component } from "react";
import { Header, Filter } from "./components"
import { Container, Row, Col } from "shards-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col md={{ size: 10, order: 2, offset: 1 }}>
              <Filter />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
