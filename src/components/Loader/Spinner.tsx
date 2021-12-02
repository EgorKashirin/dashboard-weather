import React from "react";
import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  return (
    <Container>
      <Bounce />
      <Bounce />
      <Bounce />
    </Container>
  );
};

const BounceAnimation = keyframes`
  0%, 80%, 100% {
		transform: scale(.5);
		opacity: .4;
	}
	40% {
		transform: scale(1);
		opacity: 1;
	}
`;

const Bounce = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: center;

  align-items: center;
  justify-content: center;
  & > ${Bounce} {
    width: 16px;
    height: 16px;
    margin: 0 3px;
    background-color: #208cff;
    border-radius: 100%;
    display: inline-block;
    animation: ${BounceAnimation} 1s infinite ease-in-out both;
    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
`;
