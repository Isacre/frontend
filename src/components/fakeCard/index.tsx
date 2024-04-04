import React, { useEffect, useRef, useState } from "react";
import { Component as FakeCardWrapper } from "src/components/card/styles";
import { useOnBlur } from "src/hooks/useOnBlur";
import { onEnter, onEscape } from "src/utils";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submitFn: (cardTitle: string) => void;
};

export default function FakeCard({ isOpen, submitFn, setIsOpen }: Props) {
  const [Value, setValue] = useState("");
  const FakeCardInputRef = useRef<any>();
  const WrapperRef = useRef<any>();

  function handleResetingInput() {
    setValue("");
    setIsOpen(false);
  }

  function handleCreatingCard() {
    if (Value.length === 0) {
      setIsOpen(false);
      return;
    }
    submitFn(Value);
    handleResetingInput();
  }

  // closes card creation input on clicking outside of the div
  useOnBlur({
    callback: () => {
      setValue("");
      setIsOpen(false);
    },
    elementRef: WrapperRef,
    dependencies: [],
  });

  // focus input on open
  useEffect(() => {
    if (isOpen) {
      FakeCardInputRef.current.focus();
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <FakeCardWrapper ref={WrapperRef}>
        <input
          onKeyDown={(e) => {
            onEnter(e, handleCreatingCard);
            onEscape(e, handleResetingInput);
          }}
          ref={FakeCardInputRef}
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FakeCardWrapper>
    );
  } else {
    return null;
  }
}
