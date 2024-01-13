import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";
import "./signUp.css";

function SignUpForm() {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };
  return (
    <form className="signUp-form">
      <div className="form-controller pass-hints">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />

        {isPasswordFocused && (
          <div className="hints-d">
            <span>Password requirements</span>
            <ul>
              <li id="password-too-short" class="password-strength-fail">
                <span class="ltr:pl-2 rtl:pr-2">At least 8 characters</span>
              </li>
              <li id="password-same-as-email" class="password-strength-unmet">
                <span class="ltr:pl-2 rtl:pr-2">Not your email address</span>
              </li>
              <li id="password-too-common" class="password-strength-unmet">
                <span class="ltr:pl-2 rtl:pr-2">
                  Not a commonly used password
                </span>
              </li>

              <li class="mt-2 hidden desktop:flex before:w-4 before:content-lock">
                <span class="ltr:pl-2 rtl:pr-2">
                  Stay safe — don’t reuse passwords. See more tips to{" "}
                  <a
                    href="https://support.mozilla.org/kb/password-strength"
                    target="_blank"
                    tabindex="-1"
                    class="link-grey"
                    rel="noopener noreferrer"
                  >
                    create strong passwords
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="form-controller">
        <input
          type="password"
          name="re-password"
          placeholder="Repeat password"
        />
      </div>

      <div className="form-controller">
        <input type="text" name="age" placeholder="How old are you?" />
      </div>

      <div className="sync-options">
        <a href="https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-not-just-kids-sites">
          Why do we ask?
        </a>
        <div className="sync-d">
          <span>Choose what to sync </span>
          <ul>
            <li>
              <input
                type="checkbox"
                id="Bookmarks"
                name="Bookmarks"
                value="Bookmarks"
              />
              <label for="Bookmarks"> Bookmarks </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="History"
                name="History"
                value="History"
              />
              <label for="vehicle1"> History </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="Passwords"
                name="Passwords"
                value="Passwords"
              />
              <label for="Passwords"> Passwords </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="Add-ons"
                name="Add-ons"
                value="Add-ons"
              />
              <label for="Add-ons">Add-ons</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="Open Tabs"
                name="Open Tabs"
                value="Open Tabs"
              />
              <label for="Open Tabs">Open Tabs</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="Preferences"
                name="Preferences"
                value="Preferences"
              />
              <label for="Preferences">Preferences</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Credit Cards"
                name="Credit Cards"
                value="Credit Cards"
              />
              <label for="Credit Cards">Credit Cards</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt">
        <button type="submit" className="btn-primary">
          Create Account
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
