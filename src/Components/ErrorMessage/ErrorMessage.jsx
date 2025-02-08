import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="p-10 text-center text-[22px] flex flex-col gap-2">
      <span>⛔️</span>
      <span>{message}!</span>
    </div>
  );
};

export default ErrorMessage;
