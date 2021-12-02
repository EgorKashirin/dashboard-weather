import { FC, CSSProperties } from "react";
import { Container, Title } from "./Loader.style";
import { Spinner } from "components/Spinner";

interface LoaderProps {
  hasOverlay?: boolean;
  title?: string;
  style?: CSSProperties;
  children?: Element;
  spinnerSize?: number;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { hasOverlay, title, style, children, spinnerSize } = props;

  return (
    <Container hasOverlay={hasOverlay} style={style}>
      {title && <Title>{title}</Title>}
      {children && <>{children}</>}
      <Spinner size={spinnerSize} />
    </Container>
  );
};
