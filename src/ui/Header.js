import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
            <i class="fa-sharp fa-solid fa-house"></i>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>About</span>
            <i class="fa-solid fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/project">
            <span>Project</span>
            <i class="fa-solid fa-folder"></i>
          </Link>
        </li>
        <li>
          <a href="https://github.com/annedec05" target="_blank">
            <span>GITHUB</span>
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  left: 100px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 100;

  ul {
    li {
      width: 50px;
      height: 50px;
      span {
        display: none;
      }

      a {
        display: block;
        text-align: center;
      }

      i {
        color: #fff;
        font-size: 27px;
      }
    }
  }
`;

export default Header;
