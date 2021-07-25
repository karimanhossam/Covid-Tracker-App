import {
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Theme,
  useTheme,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { GetPatientsByCountry } from "../../actions/PatientsActions";
import { RootStore } from "../../Store";
import "./Patients.css";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
);
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function Tab2(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const [country, setCountry] = useState("");
  const [country_selected, setCountry_selected] = useState(false);
  const dispatch = useDispatch();
  const patientsState = useSelector(
    (state: RootStore) => state.patients_country
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      (patientsState.patients ? patientsState.patients.length : 0) -
        page * rowsPerPage
    );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const selectCountry = (val: string) => {
    setCountry_selected(true);
    dispatch(GetPatientsByCountry(val));
    setCountry(val);
    setCountry_selected(true);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div>
            <CountryDropdown
              classes="custom-dropdown"
              value={country}
              onChange={(val) => selectCountry(val)}
            />
          </div>
          {country_selected && (
            <div className="tab2-container">
              {patientsState.loading && <Spinner animation="border" />}
              {!patientsState.loading && patientsState.patients && (
                <TableContainer component={Paper} className="custom-table">
                  <Table aria-label="custom pagination table">
                    <TableHead>
                      <TableRow className="table-head">
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Temperature</TableCell>
                        <TableCell align="right">Symptoms</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? patientsState.patients.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : patientsState.patients
                      ).map((patient) => (
                        <TableRow hover key={patient.first_name}>
                          <TableCell component="th" scope="row">
                            {patient.first_name + " " + patient.last_name}
                          </TableCell>

                          <TableCell style={{ width: 160 }} align="right">
                            {patient.age}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {patient.country}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {patient.temperature}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {patient.symptoms}
                          </TableCell>
                        </TableRow>
                      ))}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[
                            5,
                            10,
                            25,
                            { label: "All", value: -1 },
                          ]}
                          colSpan={6}
                          count={Math.ceil(
                            patientsState.patients.length / rowsPerPage
                          )}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: { "aria-label": "rows per page" },
                            native: true,
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                  {!patientsState.patients && <span> No Data To Show</span>}
                </TableContainer>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Tab2;
