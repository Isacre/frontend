export function handleKeyboardEvents(e: KeyboardEvent, onEnterFn: Function, onEscFn: Function) {
  const key = e.key;
  if (key === "Enter") return onEnterFn();
  if (key === "Escape") return onEscFn();
}
