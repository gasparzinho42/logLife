import styled from "styled-components";
import colors from "../../utils/colors";
export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ResetPasswordLink = styled.span`
  color: ${colors.black};
  text-decoration: underline;
  font-family: "Nunito", sans-serif;
  margin-top: 10px;
  cursor: pointer;
`;
