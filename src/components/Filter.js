import React, { Component } from "react";
import { FormCheckbox, FormRadio } from "shards-react";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.changeSearchOption = this.changeSearchOption.bind(this);
    this.state = {
      kumyoung: false,
      tj: false,
      searchOption: null
    };
  }

  handleBrandChange(e, fruit) {
    const newState = {};
    newState[fruit] = !this.state[fruit];
    this.setState({ ...this.state, ...newState });
  }

  changeSearchOption(option) {
    this.setState({
      searchOption: option
    });
  }

  render() {
    return (
      <div>
        <p>브랜드 선택</p>
        <FormCheckbox
          inline
          checked={this.state.kumyoung}
          onChange={e => this.handleBrandChange(e, "kumyoung")}
        >
          금영
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.tj}
          onChange={e => this.handleBrandChange(e, "tj")}
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
      </div>
    );
  }
}

export default Filter;