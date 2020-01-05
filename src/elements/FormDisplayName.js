import React, { useState } from "react";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [isFormVisible, toggleForm] = useState(false);

  const onChange = evt => setNewDisplayName(evt.target.value);

  const saveDisplayName = () => {
    if (newDisplayName.trim()) {
      user.updateProfile({ displayName: newDisplayName });
      toggleForm(!isFormVisible);
    }
  };

  if (isFormVisible) {
    return (
      <div className="mb-3">
        <div className="d-inline-block">Hello,</div>
        <input
          className="ml-2 w-25 form-control d-inline-block"
          type="text"
          value={newDisplayName}
          onChange={onChange}
          maxLength={16}
        />
        <button className="btn btn-sm btn-link ml-2" onClick={saveDisplayName}>
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="mb-3">
        Hello, <b>{newDisplayName}</b>!{" "}
        <small
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => toggleForm(!isFormVisible)}
        >
          Click here to change your display name
        </small>
      </div>
    );
  }
};

export default FormDisplayName;
