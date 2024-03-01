import React from "react";

const MyButton = ({ type, text, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default"; // 항상 3가지만 갖도록

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
