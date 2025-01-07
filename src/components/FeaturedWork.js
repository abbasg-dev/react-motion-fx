import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledFeaturedWorkSection = styled.section`
  background-color: #000;
  position: relative;
  display: flex;
  width: 100%;
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

  useLayoutEffect(() => {
    gsap.set([".word__container-featured", ".word__container-work"], {
      perspective: 200,
      opacity: 0,
      scaleY: 2,
      y: 250,
      rotation: 15,
      rotateX: -25,
      transformOrigin: "0% 0% 0%",
    });
    gsap.to(".word__container-featured", {
      opacity: 1,
      y: 0,
      scaleY: 1,
      rotation: 0,
      rotationX: 0,
      duration: 1.25,
      transformOrigin: "0% 0% 0%",
      ease: "power3.inOut",
      delay: 0.25,
      scrollTrigger: {
        trigger: titleTriggerRef.current,
        start: "top center",
        //markers: true,
      },
    });
    gsap.to(".word__container-work", {
      opacity: 1,
      y: 0,
      scaleY: 1,
      rotation: 0,
      rotationX: 0,
      duration: 1.25,
      transformOrigin: "0% 0% 0%",
      ease: "power3.inOut",
      delay: 0.35,
      scrollTrigger: {
        trigger: titleTriggerRef.current,
        start: "top center",
        //markers: true,
      },
    });
  }, []);

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
