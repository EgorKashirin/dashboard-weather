import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin: 30px 15px;
  color: gray;
`;

export const ZoomArea = styled.p`
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
  color: gray;
`;

export const Four = styled.span``;

export const Zero = styled.span``;

export const ErrorContainer = styled.section`
  text-align: center;
  font-size: 106px;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
  margin: 70px 15px;

  & > span {
    display: inline-block;
    position: relative;
  }

  & > ${Four} {
    width: 136px;
    height: 43px;
    border-radius: 999px;
    background: linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
      linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
      linear-gradient(to right, #d89ca4, #e27b7e);
  }

  & > ${Four}:before, & > ${Four}:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 999px;
  }

  & > ${Four}:before {
    width: 43px;
    height: 156px;
    left: 60px;
    bottom: -43px;
    background: linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
      linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
      linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
  }

  & > ${Four}:after {
    width: 137px;
    height: 43px;
    transform: rotate(-49.5deg);
    left: -18px;
    bottom: 36px;
    background: linear-gradient(to right, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
  }

  & > ${Zero} {
    vertical-align: text-top;
    width: 156px;
    height: 156px;
    border-radius: 999px;
    background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%, transparent 51%, transparent 100%),
      linear-gradient(to top right, #99749d, #99749d, #b895ab, #cc9aa6, #d7969e, #ed8687, #ed8687);
    overflow: hidden;
    animation: bgshadow 5s infinite;
  }

  & > ${Zero}:before {
    content: "";
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 90px;
    height: 90px;
    left: 0px;
    bottom: 0px;
    background: transparent linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%)
      linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);
  }

  & > ${Zero}:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 999px;
    width: 70px;
    height: 70px;
    left: 43px;
    bottom: 43px;
    background: #fdfaf5;
    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }

  @keyframes bgshadow {
    0% {
      box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
    }
    45% {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    55% {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const ScreenReaderText = styled.span`
  position: absolute;
  top: -9999em;
  left: -9999em;
`;
