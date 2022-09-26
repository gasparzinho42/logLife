import React from "react";
import { Wrapper } from "./styles";
interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
