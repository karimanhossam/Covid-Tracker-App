import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogPatients } from "../../actions/PatientsActions";
import { RootStore } from "../../Store";

import "./Reports.css";

function Reports() {
  const dispatch = useDispatch();
  const postPatientState = useSelector(
    (state: RootStore) => state.patients_log
  );
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number>();
  const [temp, setTemp] = useState<number>();
  const [symptoms, setSymptoms] = useState("");
  const [long, setLong] = useState<number>();
  const [lat, setLat] = useState<number>();
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [fetchinglocation, setFetchinglocation] = useState(false);

  const [firstNameText, setFirstNameText] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastNameText, setLastNameText] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [EmailText, setEmailText] = useState("");
  const [EmailError, setEmailError] = useState(false);

  const [ageText, setAgeText] = useState("");
  const [ageError, setAgeError] = useState(false);

  const [locationText, setLocationText] = useState("");
  const [locationError, setLocationError] = useState(false);

  const [tempText, setTempText] = useState("");
  const [tempError, setTempError] = useState(false);

  const [symptomsText, setSymptomsText] = useState("");
  const [symptomsError, setSymptomsError] = useState(false);

  const checkFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirst_name(event.target.value);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setFirstNameText("First name is required");
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const checkLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLast_name(event.target.value);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setLastNameText("Last name is required");
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setEmailText("Email is required");
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const checkAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.valueAsNumber);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setAgeText("Age is required");
      setAgeError(true);
    } else {
      setAgeError(false);
    }
  };

  const checkTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.valueAsNumber);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setTempText("Temperature is required");
      setTempError(true);
    } else {
      setTempError(false);
    }
  };

  const checkLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setLocationText("Location is required");
      setLocationError(true);
    } else {
      setLocationError(false);
    }
  };

  const checkSymptoms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(event.target.value);
    if (
      event.target.value == null ||
      event.target.value === undefined ||
      event.target.value === ""
    ) {
      setSymptomsText("Symptoms is required");
      setSymptomsError(true);
    } else {
      setSymptomsError(false);
    }
  };

  const handleSubmit = () => {
    if (
      first_name !== "" &&
      email !== "" &&
      last_name !== "" &&
      age !== undefined &&
      temp !== undefined &&
      location !== "" &&
      long !== undefined &&
      lat !== undefined &&
      country !== "" &&
      symptoms !== ""
    ) {
      dispatch(
        LogPatients(
          first_name,
          email,
          long,
          lat,
          country,
          age,
          temp,
          symptoms,
          last_name
        )
      );
    } else {
      if (first_name === "") {
        setFirstNameText("First name is required");
        setFirstNameError(true);
      }
      if (last_name === "") {
        setLastNameText("Last name is required");
        setLastNameError(true);
      }
      if (email === "") {
        setEmailText("Email is required");
        setEmailError(true);
      }
      if (location === "") {
        setLocationText("Location is required");
        setLocationError(true);
      }
      if (age === undefined) {
        setAgeText("Age is required");
        setAgeError(true);
      }
      if (temp === undefined) {
        setTempText("Temperature is required");
        setTempError(true);
      }
      if (symptoms === "") {
        setSymptomsText("Symptoms is required");
        setSymptomsError(true);
      }
    }
  };

  const getMyLocation = async () => {
    setFetchinglocation(true);
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted" || result.state === "prompt") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              console.log(latitude);
              console.log(longitude);

              setLong(parseFloat(longitude.toPrecision(4)));
              setLat(parseFloat(latitude.toPrecision(4)));
              axios
                .get(
                  `https://secure.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=karimanhossam`
                )
                .then((res: any) => {
                  setCountry(res.data.countryName);
                  setLocation(
                    latitude.toPrecision(4) +
                      ", " +
                      longitude.toPrecision(4) +
                      ", " +
                      res.data.countryName
                  );
                  setFetchinglocation(false);
                  setLocationError(false);
                })
                .catch((err) => {
                  setLocationError(true);
                  setLocationText("Cannot detect your current location");
                  setFetchinglocation(false);
                });
            });
          } else if (result.state === "denied") {
            setLocationError(true);
            setLocationText("Please allow access to your location");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  };
  return (
    <div>
      <div className="report-page">
        <p className="report-title">Report your Covid symptoms now!</p>

        <Form className="white-form">
          {postPatientState.errMsg && (
            <span className="text-danger err-login">
              {postPatientState.errMsg}
            </span>
          )}
          <Form.Row>
            <Form.Group controlId="formGridTitle">
              <Form.Label>First name *</Form.Label>
              <Form.Control
                type="title"
                placeholder="First name"
                onChange={checkFirstName}
              />
              {firstNameError && (
                <span className="text-danger">{firstNameText}</span>
              )}
            </Form.Group>
            <Form.Group controlId="formGridTitle">
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type="title"
                placeholder="Last name"
                onChange={checkLastName}
              />
              {lastNameError && (
                <span className="text-danger">{lastNameText}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formGridRating">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="title"
                placeholder="Email"
                onChange={checkEmail}
              />
              {EmailError && <span className="text-danger">{EmailText}</span>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridRating">
              <Form.Label>Age *</Form.Label>
              <Form.Control
                type="number"
                min="10"
                max="105"
                placeholder="Age"
                onChange={checkAge}
              />
              {ageError && <span className="text-danger">{ageText}</span>}
            </Form.Group>
            <Form.Group controlId="formGridRating">
              <Form.Label>Temperature *</Form.Label>
              <Form.Control
                type="number"
                min="35"
                max="42"
                placeholder="Temperature"
                onChange={checkTemp}
              />
              {tempError && <span className="text-danger">{tempText}</span>}
            </Form.Group>
            <Form.Group
              controlId="formGridRating"
              className="side-button-container"
            >
              <div className="side-button">
                <Form.Control
                  disabled
                  type="title"
                  placeholder="Location"
                  onChange={checkLocation}
                  value={location}
                />
                <Button
                  className="post2-Btn"
                  color="primary"
                  onClick={getMyLocation}
                >
                  {fetchinglocation && (
                    <Spinner className="Btn2-text" animation="border" />
                  )}
                  {!fetchinglocation && <span className="Btn2-text">Pin</span>}
                </Button>
              </div>
              {locationError && (
                <span className="text-danger">{locationText}</span>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              className="form-group3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Symptoms</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your symptoms"
                onChange={checkSymptoms}
              />
              {symptomsError && (
                <span className="text-danger">{symptomsText}</span>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              className="form-group3 middle-row"
              controlId="exampleForm.ControlTextarea1"
            >
              <Button
                className="post-Btn"
                color="primary"
                onClick={handleSubmit}
              >
                {postPatientState.loading && <Spinner animation="border" />}
                {!postPatientState.loading && <span>Submit</span>}
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
}

export default Reports;
