import styled from "styled-components";
import colors from "../../utils/colors";
interface CustomInputProps {
  error?: boolean;
}

export const CustomInputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin-bottom: 41px;
`;
export const CustomInput = styled.input<Pick<CustomInputProps, "error">>`
  width: 100%;
  background-color: transparent;
  height: 40px;
  padding: 0px 10px;
  border: 1px solid ${(p) => (p.error ? colors.redish : colors.black)};
  border-radius: 10px;
`;
export const CustomLabel = styled.label<Pick<CustomInputProps, "error">>`
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  color: ${(p) => (p.error ? colors.redish : colors.black)};
  margin-bottom: 5px;
`;
export const ErrorWrapper = styled.span`
  font-family: "Nunito", sans-serif;
  margin-top: 2px;
  color: ${colors.redish};
  > img {
    height: 12px;
  }
`;
