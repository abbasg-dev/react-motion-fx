import React, { useRef } from "react";
import styled from "styled-components";

const StyledFeaturedWorkSection = styled.section`
    background-color: #000;
    position: relative;
    display: flex;
    width: 100%
    max-width: 100%;
    padding: 8em 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .featuredWork__container {
        position: relative;
        background-color: #000;
        display: flex;
        width: 100%;
        max-width: 1600px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .word__container-featured {
        position: relative;
        font-family: "Fraunces", sans-serif;
        color: #fff;
        font-size: 12.54em;
        line-height: 0.9em;
        font-style: italic;
        font-weight: 300;
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    .word__container-work {
        position: relative;
        font-family: "Inter", sans-serif;
        color: #fff;
        font-size: 13.7em;
        line-height: 0.9em;
        font-weight: 400;
        letter-spacing: 0.01em;
        text-transform: uppercase;
    }
`;

const FeaturedWork = () => {
  const titleTriggerRef = useRef();
  return (
    <>
      <StyledFeaturedWorkSection ref={titleTriggerRef}>
        <div className="featuredWork__container">
          <div className="word__container">
            <h3 className="word__container-featured">featured</h3>
          </div>
          <div className="word__container">
            <h3 className="word__container-work">work</h3>
          </div>
        </div>
      </StyledFeaturedWorkSection>
    </>
  );
};

export default FeaturedWork;
