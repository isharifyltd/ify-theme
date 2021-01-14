import React from "react";
import BriefcaseIcon from "../icons/breafcase-icon";
import CreditCardIcon from "../icons/credit-card-icon";
import HandIcon from "../icons/hand-icon";
import ListCheckIcon from "../icons/list-check-icon";
import ShevronDownIcon from "../icons/shevron-down-icon";
import Usericon from "../icons/user-icon";
import UsersIcon from "../icons/users-icon";

const Nav = () => {
  return (
    <nav className="Ify-navbar">
      <div className="Ify-navbar-brand">
        <a href="https://isharify.com" className="Ify-nav-link">
          <img src="image/isharify-icon.png" alt="logo" />
        </a>
      </div>

      <ul className="Ify-navbar-items Ify-mr-auto">
        <li className="Ify-nav-item">
          <a className="Ify-nav-link active" href="#!">
            <UsersIcon className="Ify-nav-icon" />
            <span>Employees</span>
          </a>
        </li>
        <li className="Ify-nav-item">
          <a className="Ify-nav-link" href="#!">
            <CreditCardIcon className="Ify-nav-icon" />
            <span>Salaries</span>
          </a>
        </li>
        <li className="Ify-nav-item">
          <a className="Ify-nav-link" href="#!">
            <HandIcon className="Ify-nav-icon" />
            <span>Truancy</span>
          </a>
        </li>
        <li className="Ify-nav-item">
          <a className="Ify-nav-link" href="#!">
            <BriefcaseIcon className="Ify-nav-icon" />
            <span>Projects</span>
          </a>
        </li>
      </ul>

      <ul className="Ify-navbar-items">
        <li className="Ify-nav-item">
          <a className="Ify-nav-link" href="#!">
            <span>Hi, Mizan</span>
          </a>
        </li>
        <li className="Ify-nav-item">
          <a className="Ify-nav-link Ify-dropdown-parent" href="#!">
            <Usericon className="Ify-nav-icon" />
            <ShevronDownIcon className="Ify-nav-icon" style={{ marginLeft: "-4px" }} />

            <div className="Ify-dropdown">
              <div className="Ify-dropdown-lists">
                <a href="#!" className="Ify-dropdown-list">
                  Company Settings
                </a>
                <a href="#!" className="Ify-dropdown-list">
                  Reset Password
                </a>
                <a href="#!" className="Ify-dropdown-list">
                  Logout
                </a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
