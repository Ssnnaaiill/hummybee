import React, { Component } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import SongList from "./components/SongList";
import { Container, Row, Col } from "shards-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
              <Filter />
            </Col>
          </Row>
          <SongList />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
