import React, { FC } from "react";
import { Title, ZoomArea, Four, Zero, ErrorContainer, ScreenReaderText } from "./NotFoundLayout.style";

export const NotFoundLayout: FC = () => {
  return (
    <>
      <Title>404 Error Page</Title>
      <ZoomArea>
        <b>CSS</b> animations to make a cool 404 page.
      </ZoomArea>
      <ErrorContainer>
        <Four>
          <ScreenReaderText>4</ScreenReaderText>
        </Four>
        <Zero>
          <ScreenReaderText>0</ScreenReaderText>
        </Zero>
        <Four>
          <ScreenReaderText>4</ScreenReaderText>
        </Four>
      </ErrorContainer>
    </>
  );
};
