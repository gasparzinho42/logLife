import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyUserAPI } from "../../api";
import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import Text from "../../components/text";
import { PasswordResetContext, resetPasswordContextType } from "../../context";
import { InputsContainer } from "./styles";

const PasswordReset: React.FC = () => {
  const [username, setusername] = useState("");
  const [error, setError] = useState("");
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setusername(evt.target.value);
  };
  const { setCurrentUsername } = useContext(
    PasswordResetContext
  ) as resetPasswordContextType;
  const navigate = useNavigate();
  const handleContinue = async () => {
    if (!username) {
      setError("Required field");
      return;
    }
    const response = await VerifyUserAPI({ username: username });
    console.log(response);
    if (response.status === 200) {
      setCurrentUsername(username);
      navigate("/reset-password-validation");
    } else {
      setError(response.message);
    }
  };
  return (
    <Container>
      <Logo />
      <InputsContainer>
        <Text
          style={{
            marginBottom: 12,
            alignSelf: "flex-start",
            marginLeft: "25%",
          }}
        >
          <React.Fragment>
            teste We are here to help you! <br />
            Please inform us your username.
          </React.Fragment>
        </Text>
        <Input
          label="Username"
          onChange={handleChange}
          value={username}
          error={!!error}
          errorMessage={error}
        />
      </InputsContainer>

      <Button onClick={handleContinue} label="Continue" />
    </Container>
  );
};

export default PasswordReset;
