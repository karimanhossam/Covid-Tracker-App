import React from "react";
import {
  Paper,
  Tab,
  Tabs,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import "./Patients.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Reports from "../ReportsContainer/Reports";

function Patients() {
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
      MuiTableCell: {
        head: {
          fontWeight: "bold",
          color: "#5dbac0",
        },
      },
      MuiTab: {
        textColorPrimary: {
          borderColor: "black",
          color: "blue",
        },
        selected: {
          color: "red",
          borderColor: "black",
        },
        textColorSecondary: {
          color: "blue",
          borderColor: "black",
        },
      },
    },
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="patients-container">
      <div className="block1">
        <ThemeProvider theme={theme}>
          <Paper className="tabs-container">
            <Tabs
              className="tabs-items"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="primary"
              centered
            >
              <Tab label="Worldwide" {...a11yProps(0)} />
              <Tab label="Filter by Country" {...a11yProps(1)} />
            </Tabs>
          </Paper>
          <Tab1 value={value} index={0} />
          <Tab2 value={value} index={1} />
        </ThemeProvider>
      </div>

      <div className="block2">
        <Reports />
      </div>
    </div>
  );
}

export default Patients;
