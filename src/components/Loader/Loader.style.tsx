import styled, { css } from "styled-components";

export const Container = styled.div<{ hasOverlay?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  ${(props) =>
    props.hasOverlay &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 99999999;
      background-color: #ffffff;
      opacity: 0.8;
    `}
`;

export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;
