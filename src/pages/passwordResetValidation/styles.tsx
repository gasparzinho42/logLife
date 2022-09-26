import styled from "styled-components";
import colors from "../../utils/colors";
interface liProps {
  validated: boolean;
}
export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Li = styled.li<liProps>`
  color: ${(p) => (p.validated ? "green" : colors.black)};
`;
