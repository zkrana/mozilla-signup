import React from "react";
import "./cardFooter.css";
function CardFooter() {
  return (
    <div>
      <p className="card-footer">
        A Mozilla account also unlocks access to more privacy-protecting
        products from Mozilla.
      </p>
      <p className="card-footer">
        By proceeding, you agree to the{" "}
        <a href="https://accounts.firefox.com/legal/terms">Terms of Service</a>{" "}
        and{" "}
        <a href="https://accounts.firefox.com/legal/privacy">Privacy Notice</a>.
      </p>
    </div>
  );
}

export default CardFooter;
