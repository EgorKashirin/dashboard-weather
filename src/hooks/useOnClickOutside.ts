import { FC, RefObject, useEffect } from "react";

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: () => void;
}

export const useOnClickOutside: FC<UseOnClickOutsideProps> = (ref, handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (!ref?.current || ref?.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
