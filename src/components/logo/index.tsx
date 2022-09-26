import React from "react";
import {
  LettersContainer,
  LeftLetters,
  RightLetters,
  Divider,
  LettersWrapper,
} from "./styles";
import RedCross from "../../assets/icons/red-cross.svg";

const Logo: React.FC = () => {
  return (
    <LettersWrapper>
      <LettersContainer>
        <LeftLetters>log</LeftLetters>
        <RightLetters>Life</RightLetters>
        <img src={RedCross} alt="redCross" />
      </LettersContainer>
      <Divider />
    </LettersWrapper>
  );
};

export default Logo;
