import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledContactTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 100%;
  .contact__title--container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: auto;
    .contact__title {
      flex: 0 0 auto;
      width: 83.3%;
    }
    h3 {
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 11.54em;
      letter-spacing: 4px;
      margin: 160px 0 80px 0;
      text-align: left;
      text-transform: uppercase;
      z-index: 10;
      color: #000;
      line-height: 1;
      span {
        font-family: "Fraunces", serif;
        font-style: italic;
        will-change: transform;
        align-self: flex-start;
        font-weight: 300;
        letter-spacing: 0.02em;
      }
      span:nth-of-type(2) {
        font-family: "Inter", serif;
        font-style: normal;
        align-self: flex-end;
        font-weight: 400;
        letter-spacing: 0.01em;
      }
    }
  }
`;

const StyledContactMessage = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 30rem;
  width: 100%;
  .contact__message--container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 0;
    .contact__message {
      flex-shrink: 0;
      margin-top: 0;
      max-width: 800px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      width: 100%;
      .contact__message--text {
        will-change: transform;
        margin: 0;
        padding: 0 4px;
        text-transform: uppercase;
        font-family: "Inter", sans-serif;
        font-size: 32px;
        font-weight: 300;
        letter-spacing: -1px;
        line-height: 48px;
        .contact__message--email {
          display: inline-block;
          u {
            display: inline-block;
            position: relative;
            text-decoration: none;
            &:before {
              position: absolute;
              background: #000;
              bottom: 2px;
              content: "";
              height: 2px;
              left: 0;
              width: 100%;
            }
            a {
              text-decoration: none;
              color: #000;
            }
          }
        }
      }
    }
  }
`;

const SayHello = () => {
  const titleTriggerRef = useRef();

  useLayoutEffect(() => {
    gsap.set(".contact__title-h3", { perspective: 200 });
    gsap.set(".contact__title-h3 span", {
      opacity: 0,
      scaleY: 2,
      y: 250,
      rotation: 15,
      rotationX: -25,
      transformOrigin: "0% 0% 0%",
    });
    gsap.to(".contact__title-h3 span", {
      opacity: 1,
      y: 0,
      scaleY: 1,
      rotation: 0,
      rotationX: 0,
      stagger: 0.15,
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
  }, []);

  return (
    <>
      <StyledContactTitle ref={titleTriggerRef}>
        <div className="contact__title--container">
          <div className="contact__title">
            <h3 className="contact__title-h3">
              <span className="contact__title-span">START</span>
              <span className="contact__title-span">A PROJECT</span>
            </h3>
          </div>
        </div>
      </StyledContactTitle>
      <StyledContactMessage>
        <div className="contact__message--container">
          <div className="contact__message">
            <div className="contact__message--text">
              <span>Let's create your brand in motion!&nbsp;</span>
              <span className="contact__message--email">
                <u>
                  <a href="mailto:abbasghayth5@gmail.com">abbasg</a>
                </u>
              </span>
            </div>
          </div>
        </div>
      </StyledContactMessage>
    </>
  );
};

export default SayHello;
