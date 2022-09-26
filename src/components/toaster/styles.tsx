import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";

const fadeUp = keyframes`
  from {
    opacity: 0;
    bottom: 0%;
  }

  to {
    opacity: 1;
    bottom: 15%
  }
`;
export const Container = styled.div`
  padding: 24px 50px;
  position: absolute;
  bottom: 15%;
  font-family: "Nunito", sans-serif;
  background-color: ${colors.toasterGreen};
  border-radius: 8px;
  animation: ${fadeUp} 500ms linear;
`;
