import React from "react";
import PlusIcon from "../icons/plus-icon";

const Button = () => {
  return (
    <div className="Ify-btn-group">
      <button className="Ify-btn Ify-btn-primary">Primary</button>
      <button className="Ify-btn Ify-btn-outline">Outline</button>
      <button className="Ify-btn Ify-btn-back">Back</button>
      <button className="Ify-btn" disabled="true">
        Disable
      </button>
      <button className="Ify-btn Ify-btn-cancel">Cancel</button>
      <button className="Ify-btn Ify-btn-danger">Danger</button>
      <button className="Ify-inline-btn">Inline</button>
      <button className="Ify-btn-add-new">
        <PlusIcon />
        <span>Add New</span>
      </button>
    </div>
  );
};

export default Button;
