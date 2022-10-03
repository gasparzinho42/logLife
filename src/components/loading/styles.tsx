import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
const fadeUp = keyframes`
  from {
    opacity: 0;
    top: 0%;
  }

  to {
    opacity: 1;
    top: 30%
  }
`;
export const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 30%;
  min-width: 300px;
  min-height: 30px;
  padding: 50px;
  border-radius: 8px;
  animation: ${fadeUp} 500ms linear;
  background-color: ${colors.toasterGreen};
`;
export const LoadingText = styled.span`
  font-size: 20px;
  font-family: "Nunito", sans-serif;

  color: ${colors.blackDarker};
`;
