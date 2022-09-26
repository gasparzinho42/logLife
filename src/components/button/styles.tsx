import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.button`
  text-align: center;
  background-color: ${colors.redish};
  border-radius: 10px;
  width: 150px;
  padding: 15px;
  border: none;
  color: ${colors.blackDarker};
  cursor: pointer;
  &:active {
    background-color: ${colors.brightRed};
  }
  &:hover {
    background-color: ${colors.redishTouchedAlt};
  }
`;
