import styled from "styled-components";
import colors from "../../utils/colors";
export const Divider = styled.span`
  width: 90%;
  height: 0px;
  border: 1px solid ${colors.redish};
  margin-bottom: 39px;
`;
export const LettersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Nunito", sans-serif;
`;
export const LettersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const LeftLetters = styled.span`
  color: ${colors.black};
  font-size: 48px;
`;
export const RightLetters = styled.span`
  color: ${colors.brightRed};
  margin-right: 15px;
  font-size: 48px;
`;
