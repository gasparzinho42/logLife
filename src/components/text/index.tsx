import React from "react";
import { TextContainer } from "./styles";

interface textProps {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}
const Text: React.FC<textProps> = ({ children, style }) => {
  return <TextContainer style={style}>{children}</TextContainer>;
};

export default Text;
