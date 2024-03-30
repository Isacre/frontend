import React, { useEffect, useRef } from "react";

export default function UseUpdateEffect(callback: any, dependencies: any) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
