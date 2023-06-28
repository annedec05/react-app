import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../config";

import mainSrc from "../config/images/crystal.PNG";

function MainTxtWrap() {
  return (
    <StyledHome>
      <div class="main-wrap">
        <div class="main-txt">
          <p class="tit">AHN SU JUNG</p>
          <p class="tit-typing">I'm Developer</p>
        </div>

        <div class="txt-wrap">
          <div class="txt-intro">
            <h2>
              <i class="fa-regular fa-message"></i>ABOUT ME
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

            <Link to="/about" className="more-btn">
              MORE ABOUT ME
            </Link>
          </div>

          <div class="img-box"></div>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.main`
  width: 100%;
  height: 100%;
  background: #222;
  min-height: 100vh;
  .main-wrap {
    max-width: 1100px;
    padding-top: 200px;
    margin: 0 auto;

    .main-txt {
      color: #fff;
      p.tit {
        font-size: 4rem;
        font-weight: 700;
        font-family: "Montserrat";
        margin: 30px 0;
      }
    }
  }

  .txt-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;

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
      text-align: center;
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
    }
  }
`;

export default MainTxtWrap;
