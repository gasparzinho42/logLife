import React from "react";
import { Container } from "./styles";

interface buttonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}
const Button: React.FC<buttonProps> = ({ onClick, label }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
