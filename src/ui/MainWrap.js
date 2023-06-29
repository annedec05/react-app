import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import mainSrc from "../config/images/crystal.PNG";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { useScrollFadeIn } from "../hooks";

function MainTxtWrap() {
  const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I'm Web Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I'm Sujung, Ahn",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "2em",
          display: "inline-block",
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
        repeat={Infinity}
      />
    );
  };

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("left", 1, 0.2),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledHome>
        <div className="main-wrap">
          <div className="main-txt" {...animatedItem[0]}>
            <p className="tit">PORTFOLIO</p>
            <p className="tit-typing">
              <ExampleComponent></ExampleComponent>
            </p>
          </div>

          <div className="txt-wrap" {...animatedItem[1]}>
            <div className="txt-intro">
              <h2>
                <i className="fa-regular fa-message"></i>Hi! There
              </h2>
              <p>
                안녕하세요. 저는 안수정입니다. 😁
                <br />
                새로운 기술에 두려워하지 않고 끊임없이 도전하는 '만능개발자'가
                되고 싶습니다.
                <br />
                웹에이전시에서 3년 9개월의 재직 경력이 있으며 현재 프론트엔드
                개발자로 구직중입니다.
                <br />
                도전을 경험할 수 있는 회사에서 일하고 싶습니다.
              </p>
              <ul>
                <li>
                  <span>Name : </span>안수정
                </li>
                <li>
                  <span>Birth : </span>1989.12.05
                </li>
                <li>
                  <span>Email : </span>annedec05@naver.com
                </li>
              </ul>

              <div>
                <Link to="/about" className="more-btn">
                  MORE ABOUT ME
                </Link>
              </div>
            </div>

            <div className="img-box"></div>
          </div>
        </div>
      </StyledHome>
    </motion.div>
  );
}

const StyledHome = styled.main`
  width: 100%;
  height: 100%;
  background: #222;
  min-height: 100vh;
  .main-wrap {
    max-width: 1100px;
    padding-top: 150px;
    margin: 0 auto;

    .main-txt {
      color: #fff;
      p.tit {
        font-size: 7rem;
        font-weight: 700;
        font-family: "Montserrat";
        margin: 30px 0;
      }
    }
  }

  .txt-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    .fa-regular {
      transform: rotate(90deg);
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      margin-right: 5px;
    }

    .img-box {
      width: 300px;
      height: 300px;
      background-image: url(${(props) => mainSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;
      padding-left: 3%;
      border-radius: 100%;
      filter: grayscale(30%);
    }

    .txt-intro {
      color: #fff;
      div {
        text-align: center;
        margin-top: 5%;
      }
    }

    .more-btn {
      padding: 15px 40px;
      border-radius: 26px;
      font-size: 15px;
      font-weight: 700;
      color: #222;
      line-height: 46px;
      letter-spacing: 0.5px;
      background: #fff;
      transition: all 0.4s ease-in-out;
    }

    .more-btn:hover {
      background: #222;
      color: #fff;
      border: 1px solid #fff;
    }
  }

  @media ${(props) => props.theme.mobile} {
    .main-wrap {
      padding: 100px 10px 0 10px;
      .main-txt {
        p.tit {
          font-size: 15vw;
          margin: 20px 0;
        }
      }
    }
    .txt-wrap {
      display: block;
      margin-top: 20px;

      .img-box {
        display: none;
      }
    }
  }
`;

export default MainTxtWrap;
