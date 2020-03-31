import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "shards-react";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  .card {
    margin: 20px;
  }
`;

const API_ROOT = "https://api.manana.kr/karaoke/";

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songList: []
    };
  }

  componentDidUpdate(prevProps) {
    const { brand, searchOption, searchString } = this.props;
    let requestURL;

    if (brand !== null) {
      if (searchOption !== null && searchString !== null) {
        requestURL = `${API_ROOT}${searchOption}/${searchString}/${brand}.json`;
      } else {
        requestURL = `${API_ROOT}${brand}.json`;
      }

      axios.get(requestURL).then(res => {
        const songList = res.data;
        this.setState({ songList });
      });

    }
  }

  render() {
    if (this.state.songList.length === 0) {
      return (
        <Grid>
          List is empty
        </Grid>
      );
    } else {
      return (
        <Grid>
          {
            this.state.songList.map(song =>
              <Card style={{ width: "300px" }} key={song.no}>
                <CardHeader>{song.brand} / {song.no}</CardHeader>
                <CardBody>
                  <CardTitle>{song.title}</CardTitle>
                  <p>노래 {song.singer}</p>
                </CardBody>
              </Card>
            )
          }
        </Grid>
      );
    }
  }
}

export default SongList;