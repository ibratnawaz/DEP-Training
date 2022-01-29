import React from "react";

const Input = (props: {
  name: string;
  value: string;
  getDetails: any;
  disableEditing: boolean;
}) => {
  const { name, value, getDetails, disableEditing } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{name.toUpperCase()}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={getDetails}
        readOnly={disableEditing}
      />
    </div>
  );
};

export default Input;
