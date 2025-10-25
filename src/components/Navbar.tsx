import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-ctp-base shadow-sm text-ctp-text border-b border-ctp-surface0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-ctp-surface0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-ctp-surface0 rounded-box z-1 mt-3 w-52 p-2 shadow-ctp-mauve border border-ctp-surface1"
          >
            <li>
              <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                Item 1
              </a>
            </li>
            <li>
              <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                Parent
              </a>
              <ul className="p-2 bg-ctp-surface0">
                <li>
                  <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                Item 3
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-ctp-mauve hover:bg-ctp-surface0 hover:text-ctp-lavender">
          Jikunn
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-ctp-text hover:bg-ctp-surface0 hover:text-ctp-lavender">
              Item 1
            </a>
          </li>
          <li>
            <details>
              <summary className="text-ctp-text hover:bg-ctp-surface0 hover:text-ctp-lavender">
                Parent
              </summary>
              <ul className="p-2 bg-ctp-surface0 border border-ctp-surface1 shadow-ctp-mauve">
                <li>
                  <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="text-ctp-text hover:bg-ctp-surface1 hover:text-ctp-lavender">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="text-ctp-text hover:bg-ctp-surface0 hover:text-ctp-lavender">
              Item 3
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-ctp-mauve text-ctp-base hover:bg-ctp-lavender border-none">
          Button
        </a>
      </div>
    </div>
  );
};

export default Navbar;
