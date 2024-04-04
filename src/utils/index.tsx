import { KeyboardEvent } from "react";

export function onEscape(e: KeyboardEvent<HTMLInputElement>, callbackFn: Function) {
  const key = e.key;
  if (key === "Escape") {
    callbackFn();
  }
}

export function onEnter(e: KeyboardEvent<HTMLInputElement>, callbackFn: Function) {
  const key = e.key;
  if (key === "Enter") {
    callbackFn();
  }
}
