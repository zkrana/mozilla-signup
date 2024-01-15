import React from "react";
import Logo from "../Logo";
import CodeHeader from "./CodeHeader";
import ConfirmCode from "./ConfirmCode";
import CodeFooter from "./CodeFooter";

function SignUpCodeLayout() {
  return (
    <div className="confirm-code">
      <Logo />
      <div className="card confirm-code-wrapper">
        <CodeHeader />
        <ConfirmCode />
        <CodeFooter />
      </div>
    </div>
  );
}

export default SignUpCodeLayout;
