import React, { useEffect } from "react";
import styled from "styled-components";
import skillData from "../config/data/skillData.json";
import careerData from "../config/data/careerData.json";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../hooks";

function AboutTxtWrap() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("left", 1, 0.2),
    2: useScrollFadeIn("left", 1, 0.3),
    3: useScrollFadeIn("left", 1, 0.4),
    4: useScrollFadeIn("left", 1, 0.5),
    5: useScrollFadeIn("left", 1, 0.6),
    6: useScrollFadeIn("up", 1, 0.2),
    7: useScrollFadeIn("up", 1, 0.2),
    8: useScrollFadeIn("up", 1, 0.2),
    9: useScrollFadeIn("up", 1, 0.2),
    10: useScrollFadeIn("up", 1, 0.2),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledAbout>
        <div className="aboutWrap">
          <h2 {...animatedItem[0]}>Skill</h2>
          <ul className="skillWrap">
            {skillData.map((skill, index) => {
              return (
                <li key={skill.num} {...animatedItem[index + 1]}>
                  <i className={skill.font}></i>
                  <span>{skill.name}</span>
                </li>
              );
            })}
          </ul>
          <h2 {...animatedItem[6]}>Career & Education</h2>
          <ul className="careerWrap">
            {careerData.map((career, index) => {
              return (
                <li key={career.num} {...animatedItem[index + 7]}>
                  <i className={career.gbn}></i>
                  <p className="tit">{career.name}</p>
                  <span>{career.date}</span>
                  <div>{career.content}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </StyledAbout>
    </motion.div>
  );
}

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: auto;
  padding-top: 200px;
  background: #222;

  .aboutWrap {
    width: 1100px;
    height: 100%;
    h2 {
      cursor: pointer;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 2.5rem;
      font-family: "Montserrat";
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
      margin: 150px 0;

      li {
        color: #fff;
        text-align: center;
        cursor: pointer;
      }

      i {
        font-size: 3rem;
        display: block;
        margin-bottom: 10px;
      }
    }

    .skillWrap li i:hover {
      transform: scale(1.3);
      transition-duration: 0.5s;
    }

    .careerWrap {
      display: flex;
      flex-wrap: wrap;
      margin: 150px 0;
      justify-content: space-between;

      li {
        color: #fff;
        width: 45%;
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 5% 0;
        margin: 1%;
        padding: 1%;
        min-height: 25vh;
        position: relative;
        p.tit {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
        }

        span {
          font-size: 0.8rem;
        }

        i {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 1.5rem;
        }

        div {
          font-size: 0.9rem;
          margin-top: 10px;
          white-space: pre-wrap;
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding-top: 50px;
    .aboutWrap {
      margin: 20px 10px;

      h2 {
        font-size: 1.5rem;
      }

      .skillWrap {
        margin: 50px 0;
      }

      .careerWrap {
        margin: 50px 0;

        li {
          width: 100%;
        }
      }
    }
  }
`;

export default AboutTxtWrap;
