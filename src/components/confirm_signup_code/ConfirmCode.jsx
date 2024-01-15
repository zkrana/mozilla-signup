import React from "react";

function ConfirmCode() {
  return (
    <form className="code-mt">
      <div className="form-controller">
        <input type="number" name="code" placeholder="Enter 6-digit code" />
      </div>
      <div className="mt">
        <button type="submit" className="btn-primary">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default ConfirmCode;
