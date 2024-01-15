import React from "react";

function CodeFooter() {
  return <div>
    <p className="card-footer mt">
        Code expired? 
        <a href="https://accounts.firefox.com/confirm_signup_code?context=fx_desktop_v3&entrypoint=fxa_discoverability_native&action=email&service=sync&entrypoint_experiment=mozillaaccounts-toolbar-button-default-visibility-existing-user&entrypoint_variation=treatment-a#">Email new code.</a>.
      </p>
  </div>;
}

export default CodeFooter;
