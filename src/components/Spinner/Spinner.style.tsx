import styled, { css, keyframes } from "styled-components";

export const SpinnerContainer = styled.div<{ size: number }>`
  display: flex;
  position: relative;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size + 6}px;
      height: ${props.size + 6}px;
    `};
`;

export const anim = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Image = styled.div<{ size: number }>`
  position: absolute;
  border: 3px solid ${(p) => p.color};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${anim} 1s linear infinite;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `};
`;
