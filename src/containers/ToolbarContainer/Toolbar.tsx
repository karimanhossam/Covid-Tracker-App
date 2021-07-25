import React from "react";
import { IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";

function ToolbarContainer() {
  /** Goes to home section if "home" nav is clicked  */
  const executeHomeScroll = () => {
    window.location.replace("/#home");
  };
  /** Goes to dashboard section if "dashboard" nav is clicked  */
  const executeDashboardScroll = () => {
    window.location.replace("/#dashbard");
  };
  return (
    <Toolbar className="toolbar-container">
      <div className="desktop-view">
        <div className="left-toolbar-container">
          <img
            className="logo"
            alt=""
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </div>
        <div className="right-toolbar-container">
          <nav className="intial-nav">
            <NavLink onClick={executeHomeScroll} to={"/#home"}>
              Home
            </NavLink>
            <NavLink onClick={executeDashboardScroll} to={"/#dashboard"}>
              Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="mobile-view">
        <div className="left-toolbar-container">
          <img
            className="logo"
            alt=""
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </div>
        <div className="right-toolbar-container">
          <Dropdown>
            <Dropdown.Toggle className="mobile-drop-down">
              <IconButton aria-label="" className="burger-menu" size="small">
                <Menu fontSize="inherit" />
              </IconButton>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdown-item"
                href="/#home"
                onClick={executeHomeScroll}
              >
                Home
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                href="/#dashboard"
                onClick={executeDashboardScroll}
              >
                Dashboard
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Toolbar>
  );
}
export default ToolbarContainer;
