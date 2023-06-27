import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import mainSrc from "../config/images/crystal.PNG";

function MainTxtWrap() {
	return (
		<StyledHome>
			<div class="main-wrap">
				<div className="main-left">
					<div className="img-box"></div>
				</div>

				<div className="main-right">
					<section>
						<h2>ABOUT ME</h2>

						<p>안녕하세요. 저는 안수정입니다.<br/>
						새로운 기술에 두려워하지 않고 끊임없이 도전하는 '만능개발자'가 되고 싶습니다.<br/>
						현재 프론트엔드 개발자로 구직중입니다.<br/>
						도전을 경험할 수 있는 회사에서 일하고 싶습니다.</p>
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
							<li>
								<span>GITHUB : </span> <a href="https://github.com/annedec05" targer="_blank">바로가기</a>
							</li>
						</ul>
					</section>
					<Link to="/about" className="more-btn">
						MORE ABOUT ME
					</Link>
				</div>
			</div>
		</StyledHome>
	);
}

const StyledHome = styled.main`
	display: flex;
    justify-content: center;
    align-items: center;
	height: 100vh;
	width: 100%;
	margin: auto;
	background : #6ca0dc;

	.main-wrap{
		display: flex;
		justify-content: center;
    	align-items: center;
		height : 100vh;
		border-radius : 2rem;
		background : #fff;
		width : 75%;
		height : 75%;
		.main-left {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left : 3%;
			.img-box {
				width: 400px;
				height: 400px;
				border-radius: 100%;
				background-image: url(${(props) => mainSrc});
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
				position: relative;
				padding-left : 3%;
			}
		}

		.main-right {
			h2 {
				font-size : 50px;
				line-height : 1.6;
				max-width : 670px;
				word-break : keep-all;
				font-weight : 600;
				color : #6ca0dc;
			}
			width :
			display : flex;
			flex-direction : column;
			justify-content : center;
			align-items : flex-start;
			padding: 0 7% 0 5%;
			ul {
				display: flex;
    			flex-wrap: wrap;
				margin : 50px 0 50px 0;

				li {
					width: 50%;
					padding-bottom: 10px;
					font-size: 16px;
					font-weight: 500;
					color: #6ca0dc;

					span {
						color : #333;
					}

					a {
						color : #fff;
						background: #6ca0dc;
						border-radius: 20px;
						padding: 2px 15px;
					}
				}
			}

		}

		.more-btn {
			padding : 15px 40px;
			border-radius : 26px;
			font-size : 15px;
			font-weight : 500;
			color : #fff;
			line-height : 46px;
			letter-spacing : 0.5px;
			background : #6ca0dc;
		}
		
	}
`;

export default MainTxtWrap;