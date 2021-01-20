import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import CrossIcon from "../icons/cross-icon";

const Modals = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="Ify-btn Ify-btn-primary" onClick={() => setOpen(true)}>
        Click to open Modal
      </button>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullWidth={false}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="Ify-modal">
          <div className="Ify-modal-head">
            <span className="Ify-modal-heading">Isharify Modal Title</span>
            <button className="Ify-modal-close" onClick={() => setOpen(false)}>
              <CrossIcon />
            </button>
          </div>

          <div className="Ify-modal-body-wrapper">
            <div className="Ify-modal-body">
              <p>Modal body content</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quam odio quibusdam dicta, facere magni
                necessitatibus veniam nemo doloribus iure ut autem accusantium aliquam nesciunt, quas nam? Doloremque,
                ipsa asperiores?
              </p>

              <div className="Ify-btn-group Ify-mt32">
                <button type="submit" className="Ify-btn Ify-btn-primary">
                  Add
                </button>
                <button className="Ify-btn Ify-btn-cancel" onClick={() => setOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modals;
