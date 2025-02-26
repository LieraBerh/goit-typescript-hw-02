import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={s.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};
export default ErrorMessage;
