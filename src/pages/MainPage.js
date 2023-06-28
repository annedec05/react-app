import React, { Component } from "react";
import styled from "styled-components";
import HomeTxtWrap from "../ui/MainWrap";

export class MainPage extends Component {
  render() {
    return (
      <StyledDiv>
        <HomeTxtWrap />
      </StyledDiv>
    );
  }
}

export default MainPage;

const StyledDiv = styled.div`
  overflow: hidden;
`;
