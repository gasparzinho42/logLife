import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/Input";
import Logo from "../../components/logo";
import { InputsContainer, ResetPasswordLink } from "./styles";
import { useNavigate } from "react-router-dom";
import { PasswordResetContext, resetPasswordContextType } from "../../context";
import { AuthAPI } from "../../api";
import { Errors } from "../../types";
import Toaster from "../../components/toaster";

const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [passWord, setPassword] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  const [errors, setErrors] = useState<Errors[]>([]);
  const { resetedPassword, setResetPassword } = useContext(
    PasswordResetContext
  ) as resetPasswordContextType;
  useEffect(() => {
    setTimeout(() => {
      if (resetedPassword) {
        setShowToaster(true);
        setResetPassword(false);
      }
    }, 300);
  }, []);
  const navigate = useNavigate();
  const validateLogin = () => {
    let hasError = false;
    if (!login) {
      setErrors((oldState) => [
        ...oldState,
        { field: "login", message: "Required field" },
      ]);
      hasError = true;
    }
    if (!passWord) {
      setErrors((oldState) => [
        ...oldState,
        { field: "password", message: "Required field" },
      ]);
      hasError = true;
    }
    return hasError;
  };
  const validateResponse = (status: number, message: string) => {
    console.log(message, status);
    if (status === 404 && message === "User Not Found") {
      setErrors((oldState) => [
        ...oldState,
        { field: "login", message: message },
      ]);
    }
    if (status === 400 && message === "Incorrect password") {
      setErrors((oldState) => [
        ...oldState,
        { field: "password", message: message },
      ]);
    }
    if (status === 200) {
      setErrors([]);
      alert("User successful authenticated!!");
    }
  };
  const verifyHasRequiredFieldError = (field: string) => {
    if (
      errors.find(
        (err) => err.field === field && err.message === "Required field"
      )
    ) {
      const errorsClone = errors;
      const errorsCloneIndex = errors.findIndex(
        (err) => err.field === field && err.message === "Required field"
      );
      errorsClone.splice(errorsCloneIndex);
      setErrors(errorsClone);
    }
  };
  const handleLogin = async () => {
    const body = {
      username: login,
      password: passWord,
    };
    const isInvalid = validateLogin();
    if (!isInvalid) {
      const response = await AuthAPI(body);
      validateResponse(response.status, response.message);
    }
  };
  return (
    <Container>
      <Logo />
      <InputsContainer>
        <Input
          label="Username"
          onChange={(event) => {
            const { value } = event.target;
            verifyHasRequiredFieldError("login");
            setLogin(value);
          }}
          error={!!errors.find((err) => err.field === "login")}
          errorMessage={errors.find((err) => err.field === "login")?.message}
          value={login}
        />
        <Input
          label="Password"
          onChange={(event) => {
            const { value } = event.target;
            verifyHasRequiredFieldError("password");
            setPassword(value);
          }}
          error={!!errors.find((err) => err.field === "password")}
          errorMessage={errors.find((err) => err.field === "password")?.message}
          value={passWord}
        />
      </InputsContainer>

      <Button label="Login" onClick={() => handleLogin()} />
      <ResetPasswordLink onClick={() => navigate("/reset-password")}>
        Forgot the password?
      </ResetPasswordLink>
      <Toaster
        toasterMessage="Password updated!"
        show={showToaster}
        secondsInMs={3000}
      />
    </Container>
  );
};

export default Login;
