import React from "react";

const DefaultInput = ({ type, id, label, value, onChange }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="form-control"
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  </>
);

export default DefaultInput;
