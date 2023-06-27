import React from "react";
import styled from "styled-components";
import skillData from '../config/data/skillData.json';
import careerData from '../config/data/careerData.json';

function AboutTxtWrap() {

	return (
		<StyledAbout>
			<div class="aboutWrap">
				<h2>Skill</h2>
				<ul class="skillWrap">
					{skillData.map((skill, index) => {
						return (
							<li>{skill.name}</li>
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
	background : #6ca0dc;

	.aboutWrap {
		width : 1200px;
		height : 100%;
		h2 {
			text-align : center;
			color : #fff;
			font-weight : 500;
			font-size : 3rem;
		}

		ul {
			display: flex;
			align-items: flex-end;
    		justify-content: space-between;
			flex-wrap: wrap;
			width : 100%;
			li {
				color : #fff;
				border: 1px solid #fff;
				border-radius : 1rem;
				text-align : center;
				padding : 5% 0;
				margin-bottom : 2%;
			}
		}

		.skillWrap li {
			width : 33%;
		}

		.careerWrap li {
			width : 49%;
		}
	}

`;

export default AboutTxtWrap;