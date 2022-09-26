import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import PasswordReset from "../pages/passwordReset";
import PasswordResetValidation from "../pages/passwordResetValidation";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route
          path="/reset-password-validation"
          element={<PasswordResetValidation />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
