import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

function useArrayRef() {
  // create a refs array and initialize it to an empty array
  const refs = useRef([]);
  refs.current = [];
  // push all the ref in the array
  return [refs, (ref) => ref && refs.current.push(ref)];
}

export function SplitText({ children }) {
  // console.log(children);
  let words = children.toString().split(" ");
  // console.log(words);
  const triggerRef = useRef();
  const [refs, setRef] = useArrayRef();

  return words.map((word, i) => {
    return (
      <span
        ref={triggerRef}
        key={children + i}
        style={{
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <span
          ref={setRef}
          style={{
            display: "inline-block",
            willChange: "transform",
          }}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </span>
      </span>
    );
  });
}
