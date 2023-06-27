import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <Link to="/">
                        <span>Home</span>
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span>About</span>
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/project">
                        <span>Project</span>
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/annedec05" target="_blank">
                        <span>GITHUB</span>
                        <i className="fas fa-home"></i>
                    </a>
                </li>
                <li>
                    <a href="#null" target="_blank">
                        <span>Resume</span>
                        <i className="fas fa-home"></i>
                    </a>
                </li>
            </ul>
        </StyledHeader>
    );
}


const StyledHeader = styled.header`
	position: fixed;
	left: 100px;
	top: 60px;
	bottom: 0;
	z-index: 100;
`;

export default Header;
