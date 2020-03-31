import React, { Component } from "react";
import { FormRadio, FormInput, InputGroup, InputGroupAddon, Button } from "shards-react";
import SongList from "./SongList";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.changeBrand = this.changeBrand.bind(this);
    this.changeSearchOption = this.changeSearchOption.bind(this);
    this.submitSearchString = this.submitSearchString.bind(this);
    this.changeSearchString = this.changeSearchString.bind(this);

    this.state = {
      brand: null,
      searchOption: null,
      searchString: ""
    };
  }

  changeBrand(brand) {
    this.setState({ brand });
  }

  changeSearchOption(searchOption) {
    this.setState({ searchOption });
  }

  submitSearchString(e) {
    e.preventDefault();
  }

  changeSearchString(e) {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    const { brand, searchOption, searchString } = this.state;

    return (
      <div>
        <p>브랜드 선택</p>
        <FormRadio
          inline
          checked={brand === "kumyoung"}
          onChange={() => { this.changeBrand("kumyoung") }}
        >
          금영
        </FormRadio>
        <FormRadio
          inline
          checked={brand === "tj"}
          onChange={() => { this.changeBrand("tj") }}
        >
          태진
        </FormRadio>
        <FormRadio
          inline
          checked={brand === "dam"}
          onChange={() => { this.changeBrand("dam") }}
        >
          DAM
        </FormRadio>
        <FormRadio
          inline
          checked={brand === "joysound"}
          onChange={() => { this.changeBrand("joysound") }}
        >
          JOYSOUND
        </FormRadio>
        <FormRadio
          inline
          checked={brand === "uga"}
          onChange={() => { this.changeBrand("uga") }}
        >
          UGA
        </FormRadio>
        <p>검색 옵션</p>
        <FormRadio
          inline
          checked={searchOption === "no"}
          onChange={() => {
            this.changeSearchOption("no");
          }}
        >
          번호로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={searchOption === "song"}
          onChange={() => {
            this.changeSearchOption("song");
          }}
        >
          노래 제목으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={searchOption === "singer"}
          onChange={() => {
            this.changeSearchOption("singer");
          }}
        >
          가수 이름으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={searchOption === "composer"}
          onChange={() => {
            this.changeSearchOption("composer");
          }}
        >
          작곡가 이름으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={searchOption === "lyricist"}
          onChange={() => {
            this.changeSearchOption("lyricist");
          }}>
          작사가 이름으로 검색
        </FormRadio>
        <InputGroup onSubmit={this.submitSearchString}>
          <FormInput
            placeholder="username"
            disabled={searchOption === null || brand === null}
            onChange={e => this.changeSearchString(e)}
          />
          <InputGroupAddon type="append">
            <Button theme="secondary" type="submit">Check</Button>
          </InputGroupAddon>
        </InputGroup>
        <SongList
          brand={brand}
          searchOption={searchOption}
          searchString={searchString}
        />
      </div>
    );
  }
}

export default Filter;