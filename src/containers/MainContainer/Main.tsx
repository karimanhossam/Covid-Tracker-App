import React, { useState } from "react";
import "./Main.css";
import { AppBar, createTheme, ThemeProvider } from "@material-ui/core";

import ToolbarContainer from "../ToolbarContainer/Toolbar";
import HomeVideo from "../HomeVideoContainer/HomeVideo";
import Map from "../MapContainer/Map";
import AwarenessCards from "../AwarenessCardsContainer/AwarenessCards";
import Patients from "../PatientsContainer/Patients";

function Main() {
  const theme = createTheme({
    typography: {
      fontFamily: "poppins",
    },
    overrides: {
      MuiTypography: {
        body2: {
          color: "black",
          textTransform: "lowercase",
          letterSpacing: "1px",
          fontWeight: "lighter",
          fontSize: "small",
          textAlign: "left",
        },
      },
    },
  });
  const [className, setClassName] = useState("AppBar");

  /** Turns the header to dark if scroll */
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setClassName("AppBar-dark");
    } else {
      setClassName("AppBar");
    }
  };
  /** Scroll listener  */
  window.addEventListener("scroll", handleScroll);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed" className={className}>
          <ToolbarContainer />
        </AppBar>
        <HomeVideo />
        <AwarenessCards />
        <Map />
        <Patients />
      </div>
    </ThemeProvider>
  );
}

export default Main;
