import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  return (
    <StyledHeader>
      <ul>
        <li className="inactive">
          <a className="link link--metis">
            <p className="front">
              Front-end
              <br />
              Developer
            </p>
          </a>
        </li>
        <li className={location.pathname == "/" ? "active" : "inactive"}>
          <Link to="/" className="link link--metis">
            <i className="fa-sharp fa-solid fa-house"></i>
            <span>Home</span>
            <p>It's about me. click if you want to know</p>
          </Link>
        </li>
        <li className={location.pathname == "/about" ? "active" : "inactive"}>
          <Link to="/about" className="link link--metis">
            <i className="fa-solid fa-user"></i>
            <span>About</span>
            <p>
              Education and experience and skills I have learned and used so far
            </p>
          </Link>
        </li>
        <li className={location.pathname == "/project" ? "active" : "inactive"}>
          <Link to="/project" className="link link--metis">
            <i className="fa-solid fa-folder"></i>
            <span>Project</span>
            <p>It's a website I made</p>
          </Link>
        </li>
        <li className="inactive">
          <a
            href="https://github.com/annedec05"
            target="_blank"
            className="link link--metis"
          >
            <i className="fa-brands fa-github"></i>
            <span>GITHUB</span>
            <p>My github</p>
          </a>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  min-height: 120px;
  background: #222;
  padding-top: 20px;

  ul {
    display: flex;
    justify-content: space-around;
    max-width: 1100px;
    margin: 0 auto;

    li {
      width: 100%;
      height: 50px;
      /*border-top: 1px solid #505050;*/
      margin-right: 30px;
      color: #fff;

      i {
        margin-right: 10px;
      }

      a {
        display: block;
        text-align: left;
        color: #fff;
        font-size: 15px;
        position: relative;
        padding-top: 10px;

        p.front {
          font-size: 20px;
        }
      }

      a::before,
      a::after {
        position: absolute;
        width: 100%;
        height: 1px;
        background: currentColor;
        top: 0;
        left: 0;
        pointer-events: none;
      }

      a::before {
        content: "";
      }
    }

    li.inactive {
      a::before {
        transform-origin: 100% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
      }

      a:hover::before {
        transform-origin: 0% 50%;
        transform: scale3d(1, 1, 1);
      }
    }

    li:nth-child(1) {
      padding: 0 10px;
      a {
        cursor: pointer;
      }
      p {
        margin-top: 0px;
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;

export default Header;
