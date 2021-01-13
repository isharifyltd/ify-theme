import React, { useState } from "react";

const VerticalTabs = () => {
  const [show_block, setShowBlock] = useState(1);
  return (
    <>
      {/* Vertical tabs */}
      <div className="Ify-vertical-tab">
        <div className="Ify-vertical-tab-left">
          <div className="Ify-tab-left-items">
            <button
              type="button"
              onClick={() => setShowBlock(1)}
              className={`Ify-tab-left-item ${show_block === 1 ? "active" : ""}`}
            >
              <span>Company Info</span>
              <span className="Ify-is-tringle"></span>
            </button>
            <button
              type="button"
              onClick={() => setShowBlock(2)}
              className={`Ify-tab-left-item ${show_block === 2 ? "active" : ""}`}
            >
              <span>Designations</span>
              <span className="Ify-is-tringle"></span>
            </button>
            <button
              type="button"
              onClick={() => setShowBlock(3)}
              className={`Ify-tab-left-item ${show_block === 3 ? "active" : ""}`}
            >
              <span>Permissions</span>
              <span className="Ify-is-tringle"></span>
            </button>
          </div>
        </div>

        <div className="Ify-vertical-tab-right">
          {show_block === 1 && (
            <div className="block-one">
              <p>Tab content 1</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veniam nisi ab eum fuga tempora earum
                officiis deleniti aperiam assumenda ad sapiente laboriosam quos, optio nesciunt consectetur possimus
                quibusdam sit!
              </p>
            </div>
          )}

          {show_block === 2 && (
            <div className="block-two">
              <p>Tab content 2</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veniam nisi ab eum fuga tempora earum
                officiis deleniti aperiam assumenda ad sapiente laboriosam quos, optio nesciunt consectetur possimus
                quibusdam sit!
              </p>
            </div>
          )}

          {show_block === 3 && (
            <div className="block-two">
              <p>Tab content 3</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veniam nisi ab eum fuga tempora earum
                officiis deleniti aperiam assumenda ad sapiente laboriosam quos, optio nesciunt consectetur possimus
                quibusdam sit!
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Vertical tab end */}
    </>
  );
};

export default VerticalTabs;
