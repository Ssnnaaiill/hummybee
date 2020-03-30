import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "shards-react";

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songList: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.manana.kr/karaoke/kumyoung.json`)
      .then(res => {
        const songList = res.data;
        this.setState({ songList });
      });
  }

  render() {
    return (
      <Row>
        {this.state.songList.map(song =>
          <Card style={{ width: "300px" }}>
            <CardHeader>{song.brand} / {song.no}</CardHeader>
            <CardBody>
              <CardTitle>{song.title}</CardTitle>
              <p>노래 {song.singer}</p>
            </CardBody>
          </Card>)}
      </Row>
    )
  }
}

export default SongList;