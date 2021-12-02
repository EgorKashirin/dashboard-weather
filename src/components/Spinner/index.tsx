import { FC } from "react";
import { SpinnerContainer, Image } from "./Spinner.style";

interface SpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner: FC<SpinnerProps> = ({ color = "#644ded", size = 20 }) => {
  return (
    <SpinnerContainer size={size}>
      <Image color={color} size={size} />
    </SpinnerContainer>
  );
};
