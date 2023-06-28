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
                <i class={career.gbn}></i>
                <p class="tit">{career.name}</p>
                <span>{career.date}</span>
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
    margin-top:80px;
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
    margin: 100px 0;

		li {
			color: #fff;
			text-align: center;
		}
		i {
			font-size: 3rem;
			display: block;
		}
	} 

    .careerWrap {
      display: flex;
      flex-wrap: wrap;
      margin: 100px 0;
      justify-content: space-between;

      li {
        color: #fff;
        width: 45%;
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 5% 0;
        margin: 1%;
        padding : 1%;
        min-height: 25vh;
        position:relative;
        p.tit {
          font-size : 1.2rem;
          font-weight : 700;
        }

        span {
          font-size:0.8rem;
        }

        i {
          position : absolute;
          top : 10px;
          right : 10px;
          font-size : 1.5rem; 
        }

        div {
          font-size : 1rem;
          margin-top : 10px;
          white-space:pre-wrap;
        }
      }
	} 
`;

export default AboutTxtWrap;
