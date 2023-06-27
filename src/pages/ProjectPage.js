import React from "react";
import styled from "styled-components";
import projectData from '../config/data/projectData.json';

function ProjectTxtWrap() {
	return (
		<StyledProject>
			<div class="projectWrap">
				<h2>Project</h2>
				<ul>
				{projectData.map((proj, index) => {
					return (
						<li>
							<div class="proj_left">
								<img src={process.env.PUBLIC_URL + '/project_image/' + proj.img_addr}></img>
							</div>
							<div class="proj_right">
								<p class="tit">{proj.name}</p>
								<div><span>Desctiption</span>{proj.description}</div>
								<div><span>Tech Stack</span>{proj.skill}</div>
							</div>
						</li>
					);
				})}
				</ul>
			</div>
		</StyledProject>
	);
}

const StyledProject = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	margin: auto;
	background : #6ca0dc;
	.projectWrap {
		width : 1200px;
		height : 100%;
		h2 {
			text-align : center;
			color : #fff;
			font-weight : 500;
			font-size : 3rem;
		}

		ul {
			display : flex;
			align-items : flex-end;
    		justify-content : space-between;
			flex-wrap : wrap;
			width : 100%;

			li {
				display : flex;
				margin-bottom : 2%;

				.proj_left {
					flex : 1;
				}

				.proj_right {
					flex : 1;
					padding : 2%;
					color : #fff;

					p.tit {
						
					}

					span {
						display : block;
						margin-bottom : 1%;
						font-weight : 500;
						font-size:1.2rem;
					}
				}
			}
		}
	}
`;

export default ProjectTxtWrap;