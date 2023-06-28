import React from "react";
import styled from "styled-components";
import skillData from "../config/data/skillData.json";
import careerData from "../config/data/careerData.json";

function AboutTxtWrap() {
  return (
    <StyledAbout>
      <div class="aboutWrap">
        <h2>Skill</h2>
        <ul class="skillWrap">
          {skillData.map((skill, index) => {
            return (
              <li>
                <i class={skill.font}></i>
                {skill.name}
              </li>
            );
          })}
        </ul>

        <h2>Career & Education</h2>
        <ul class="careerWrap">
          {careerData.map((career, index) => {
            return (
              <li>
                <span>{career.date}</span>
                <div>{career.name}</div>
                <div>{career.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: auto;
  background: #6ca0dc;

  .aboutWrap {
    width: 1200px;
    height: 100%;
    h2 {
      cursor: pointer;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 3rem;
    }

    h2:before,
    h2:after {
      content: "[";
      display: inline-block;
      position: relative;
      top: 1px;
      height: 100%;
      font-size: 1.25em;
      color: #fff;
      margin-right: 5px;

      transition: all 0.5s ease;
    }

    h2:after {
      content: "]";
      margin-right: 0px;
      margin-left: 5px;
    }

    h2:hover:before {
      transform: translateX(-15px);
    }

    h2:hover:after {
      transform: translateX(15px);
    }

    .skillWrap {
		display: flex;
		justify-content: space-around;
		li {
			color: #fff;
			text-align: center;
			margin: 50px 0 100px 0;
		}
		i {
			font-size: 3rem;
			display: block;
		}
	} 

    .careerWrap {
		li {
			color: #fff;
			width: 49%;
			border: 1px solid #fff;
			border-radius: 1rem;
			text-align: center;
			padding: 5% 0;
			margin-bottom: 2%;
		}
	} 
`;

export default AboutTxtWrap;
