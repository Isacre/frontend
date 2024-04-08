import React from "react";

import { useState, useEffect } from "react";
import { Component } from "./styles";

export default function LoadingScreen() {
  const [Dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (Dots === "...") {
        setDots("");
      } else {
        setDots((prevText) => prevText + ".");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [Dots]);

  return <Component>{"Carregando" + Dots}</Component>;
}

/* 

export function LoadingText(props: { text: string; timer?: number }) {
  const { text, timer = 1000 } = props;

 
  return <div>{text + Dots}</div>;
}
 */
