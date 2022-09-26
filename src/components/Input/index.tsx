import React from "react";
import {
  CustomInput,
  CustomInputContainer,
  CustomLabel,
  ErrorWrapper,
} from "./styles";
import Exclamation from "../../assets/icons/exclamation.svg";
interface ContainerProps {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  value: string;
  error?: boolean;
  errorMessage?: string;
}
const Input: React.FC<ContainerProps> = ({
  label,
  ref,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <CustomInputContainer>
      {label && <CustomLabel error={error}>{label}</CustomLabel>}
      <CustomInput ref={ref} value={value} onChange={onChange} error={error} />
      {errorMessage && (
        <ErrorWrapper>
          <img src={Exclamation} alt="Exclamation" /> {errorMessage}
        </ErrorWrapper>
      )}
    </CustomInputContainer>
  );
};

export default Input;
