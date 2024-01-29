import React from "react";

export default function InputPassword(props) {
  const register = props.register;
  const label = props.label;
  const validateFunction  = props.validateConfirmPassword;
  const togglePassword = (e) => {
    const password = e.target.previousElementSibling;
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    if (e.target.classList[1] == "fa-eye-slash") {
      e.target.classList.toggle("fa-eye");
      e.target.classList.remove("fa-eye-slash");
    } else {
      e.target.classList.toggle("fa-eye-slash");
      e.target.classList.remove("fa-eye");
    }
  };
  return (
    <>
      <input
        {...register(label, {
          validate: validateFunction,
          required: true,
          pattern:
            /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
        })}
        type="password"
        className="auth-form__input"
        placeholder="Mật khẩu của bạn"
      />
      <i
        className="fas fa-eye-slash"
        onClick={togglePassword}
        style={{ marginLeft: "-30px", cursor: "pointer", verticalAlign: "2px" }}
      ></i>
    </>
  );
}
