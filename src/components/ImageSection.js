import React from "react";
import styled from "styled-components";
import Five from "../images/5.jpg";

const StyledImageSection = styled.section`
  position: relative;
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-bottom: 20vh;
  padding: 8em 2em;
  will-change: transform;
  transform-style: preserve-3d;
  .image__container {
    position: relative;
    overflow: hidden;
    width: 36vw;
    height: 52vw;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid transparent;
    border-radius: 900px;
    will-change: transform;
    transform-style: preserve-3d;
  }
`;

const ImageSection = () => {
  return (
    <StyledImageSection>
      <div className="image__container">
        <img alt="" src={Five} />
      </div>
    </StyledImageSection>
  );
};

export default ImageSection;
