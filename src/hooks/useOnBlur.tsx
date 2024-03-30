import React, { useEffect } from "react";

type Props = {
  elementRef: React.MutableRefObject<any>;
  callback: () => void;
  dependencies: any[];
};

export function useOnBlur(props: Props) {
  const { callback, dependencies, elementRef } = props;

  function onBlur() {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  useEffect(() => {
    onBlur();
    //eslint-disable-next-line
  }, dependencies);
}
