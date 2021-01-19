import React from "react";

const Checkbox = () => {
  return (
    <div className="Ify-btn-group">
      <label className="Ify-checkbox">
        <input type="checkbox" />
        <span></span>
        <span>Isharify checkbox</span>
      </label>

      <label className="Ify-checkbox">
        <input type="checkbox" />
        <span></span>
        <span>Isharify checkbox</span>
      </label>

      <label className="Ify-checkbox">
        <input type="checkbox" disabled={true} />
        <span></span>
        <span>Isharify checkbox disabled</span>
      </label>
    </div>
  );
};

export default Checkbox;
