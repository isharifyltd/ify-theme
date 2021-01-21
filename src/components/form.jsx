import React from "react";
import CalenderIcon from "../icons/calender-icon";
import ShevronDownIcon from "../icons/shevron-down-icon";

const Form = () => {
  return (
    <>
      <div className="Ify-form-control">
        <label className="Ify-label">Isharify Label</label>
        <div className="Ify-input-wrapper">
          <input className="Ify-input" type="text" placeholder="Isharify text field" style={{ paddingRight: "62px" }} />
          <span className="Ify-input-info">hrs/week</span>
        </div>
        <div className="Ify-error-msg">Isharify error message</div>
      </div>

      <div className="Ify-form-control">
        <label className="Ify-label">Isharify Label Required *</label>
        <div className="Ify-input-wrapper">
          <input className="Ify-input" type="text" placeholder="Isharify text field" />
        </div>
      </div>

      <div className="Ify-form-control">
        <label className="Ify-label">Isharify Label Required *</label>
        <div className="Ify-input-wrapper">
          <input className="Ify-input" type="date" placeholder="Isharify date field" />
          <CalenderIcon className="Ify-icon-inside-input" />
        </div>
      </div>

      <div className="Ify-form-control">
        <label className="Ify-label">Month, Year</label>
        <div className="Ify-input-wrapper">
          <select className="Ify-input Ify-select" name="month">
            <option value="1####2021">January, 2021</option>
            <option value="12####2020">December, 2020</option>
            <option value="11####2020">November, 2020</option>
          </select>
          <ShevronDownIcon className="Ify-icon-inside-input" />
        </div>
      </div>

      <div className="Ify-form-control">
        <label className="Ify-label">Isharify Textarea *</label>
        <div className="Ify-input-wrapper">
          <textarea className="Ify-input Ify-textarea" placeholder="Isharify Textarea"></textarea>
        </div>
      </div>
    </>
  );
};

export default Form;
