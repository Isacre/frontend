import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback: Function, delay: number, dependencies: any[]) {
  const { reset, clear } = useTimeout(callback, delay);
  //eslint-disable-next-line
  useEffect(reset, [...dependencies, reset]);
  //eslint-disable-next-line
  useEffect(clear, []);
}
