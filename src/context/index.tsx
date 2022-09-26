import { createContext, PropsWithChildren, useState } from "react";

export const PasswordResetContext = createContext({});

export interface resetPasswordContextType {
  resetedPassword: boolean;
  setResetPassword: React.Dispatch<React.SetStateAction<boolean>>;
  currentUsername: string;
  setCurrentUsername: React.Dispatch<React.SetStateAction<string>>;
}
const PasswordResetContextProvider = ({ children }: PropsWithChildren) => {
  const [resetedPassword, setResetPassword] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("");
  const values = {
    resetedPassword,
    setResetPassword,
    setCurrentUsername,
    currentUsername,
  };
  return (
    <PasswordResetContext.Provider value={values}>
      {children}
    </PasswordResetContext.Provider>
  );
};
export default PasswordResetContextProvider;
