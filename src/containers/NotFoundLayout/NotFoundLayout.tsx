import React, { FC } from "react";
import { Title, ZoomArea, Four, Zero, ErrorContainer, ScreenReaderText } from "./NotFoundLayout.style";

export const NotFoundLayout: FC = () => {
  return (
    <>
      <Title>404 Error Page</Title>
      <ZoomArea>
        <b>Page</b>not found.
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
