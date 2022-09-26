import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPasswordAPI } from "../../api";
import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import Text from "../../components/text";
import { PasswordResetContext, resetPasswordContextType } from "../../context";
import { InputsContainer, Li } from "./styles";
import { defaultSteps } from "./utils/definitions";
import {
  containsNumbers,
  containsSpecialChars,
  containsCapitalLetters,
} from "./utils/validations";

const PasswordResetValidation: React.FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [verificationSteps, setVerificationSteps] = useState(defaultSteps);

  const { setResetPassword, currentUsername } = useContext(
    PasswordResetContext
  ) as resetPasswordContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUsername) {
      navigate("/");
    }
  }, []);

  const verifySteps = (value: string) => {
    const verificationStepsClone = verificationSteps;
    verificationStepsClone[0].validated = containsNumbers(value);
    verificationStepsClone[1].validated = containsSpecialChars(value);
    verificationStepsClone[2].validated = containsCapitalLetters(value);
    verificationStepsClone[3].validated = value.length >= 8;
    setVerificationSteps(verificationStepsClone);
  };
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    verifySteps(value);
    setPassword(value);
  };

  const handleResetPassword = async () => {
    if (verificationSteps.every((step) => step.validated === true)) {
      setResetPassword(true);
      const data = {
        username: currentUsername,
        password: password,
      };
      const response = await resetPasswordAPI(data);
      if (response.status === 201) {
        navigate("/");
      } else {
        setError("An unexpected Error ocurred, please try again");
      }
    }
  };

  return (
    <Container>
      <Logo />
      <InputsContainer>
        <Input
          label="Please set your new password"
          onChange={handleChange}
          value={password}
          error={!!error}
          errorMessage={error}
        />
        <Text
          style={{
            marginBottom: 22,
            alignSelf: "flex-start",
            marginLeft: "25%",
          }}
        >
          <React.Fragment>
            {verificationSteps.map((step) => {
              return <Li validated={step.validated}>{step.text}</Li>;
            })}
          </React.Fragment>
        </Text>
      </InputsContainer>

      <Button onClick={handleResetPassword} label="Reset password" />
    </Container>
  );
};

export default PasswordResetValidation;
