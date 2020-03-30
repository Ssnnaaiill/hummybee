import React, { Component } from "react";
import { FormCheckbox, FormRadio, FormInput } from "shards-react";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.changeBrand = this.changeBrand.bind(this);
    this.changeSearchOption = this.changeSearchOption.bind(this);
    this.changeSearchString = this.changeSearchString.bind(this);

    this.state = {
      kumyoung: false,
      tj: false,
      searchOption: null,
      searchString: ""
    };
  }

  changeBrand(e, brand) {
    const newState = {};
    newState[brand] = !this.state[brand];
    this.setState({ ...this.state, ...newState });
  }

  changeSearchOption(option) {
    this.setState({
      searchOption: option
    });
  }

  changeSearchString(e) {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p>브랜드 선택</p>
        <FormCheckbox
          inline
          checked={this.state.kumyoung}
          onChange={e => this.changeBrand(e, "kumyoung")}
        >
          금영
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.tj}
          onChange={e => this.changeBrand(e, "tj")}
        >
          태진
        </FormCheckbox>
        <p>검색 옵션</p>
        <FormRadio
          inline
          checked={this.state.changeSearchOption === "no"}
          onChange={() => {
            this.changeSearchOption("no");
          }}
        >
          번호로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={this.state.searchOption === "title"}
          onChange={() => {
            this.changeSearchOption("title");
          }}
        >
          노래 제목으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={this.state.searchOption === "singer"}
          onChange={() => {
            this.changeSearchOption("singer");
          }}
        >
          가수 이름으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={this.state.searchOption === "composer"}
          onChange={() => {
            this.changeSearchOption("composer");
          }}
        >
          작곡가 이름으로 검색
        </FormRadio>
        <FormRadio
          inline
          checked={this.state.searchOption === "lyricist"}
          onChange={() => {
            this.changeSearchOption("lyricist");
          }}>
          작사가 이름으로 검색
        </FormRadio>
        <FormInput id="searchString" onChange={e => this.changeSearchString(e)} />
        <pre>{JSON.stringify(this.state)}</pre>
      </div >
    );
  }
}

export default Filter;