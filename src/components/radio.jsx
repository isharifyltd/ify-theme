import React from "react";

const Radio = () => {
  return (
    <div className="Ify-btn-group">
      <label className="Ify-radio-btn">
        <input name="radio" type="radio" />
        <span></span>
        <span>Isharify radio button</span>
      </label>

      <label className="Ify-radio-btn">
        <input name="radio" type="radio" />
        <span></span>
        <span>Isharify radio button</span>
      </label>

      <label className="Ify-radio-btn">
        <input name="radio" type="radio" disabled={true} />
        <span></span>
        <span>Isharify radio button disabled</span>
      </label>
    </div>
  );
};

export default Radio;
