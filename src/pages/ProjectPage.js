import React from "react";
import styled from "styled-components";
import projectData from "../config/data/projectData.json";

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
                  <img
                    src={
                      process.env.PUBLIC_URL + "/project_image/" + proj.img_addr
                    }
                  ></img>
                </div>
                <div class="proj_right">
                  <p class="tit">{proj.name}</p>
                  <div>
                    <span>Description</span>
                    {proj.description}
                  </div>
                  <div>
                    <span>Tech Stack</span>
                    {proj.skill}
                  </div>
                  <div>
                    <span>Feature</span>
                    {proj.function}
                  </div>
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
  background: #6ca0dc;
  .projectWrap {
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

    ul {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

      li {
        display: flex;
        margin-bottom: 3%;
        padding: 5% 0;

        .proj_left {
          flex: 1;
        }

        .proj_right {
          flex: 1;
          padding: 0 2%;
          color: #fff;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;

          p.tit {
            font-size: 1.5rem;
          }

          span {
            display: block;
            margin-right: 5px;
            margin-bottom: 1%;
            font-weight: 700;
            font-size: 1.2rem;
          }
        }
      }

      /*li:nth-child(2n) {
        flex-flow: row-reverse wrap;
      }*/
    }
  }
`;

export default ProjectTxtWrap;
