import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./Map.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { GetPatientsMap } from "../../actions/PatientsActions";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";

import L from "leaflet";

function Map() {
  const dispatch = useDispatch();
  const patientsState = useSelector((state: RootStore) => state.map);
  React.useEffect(() => {
    var markers = L.markerClusterGroup();
    markers.clearLayers();
    FetchData();
  }, []);
  const FetchData = () => {
    dispatch(GetPatientsMap());
  };
  return (
    <div className="map-container" id="dashbard">
      <MapContainer
        center={[26.8206, 30.8025]}
        zoom={3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=English"
        />
        <MarkerClusterGroup chunkedLoading>
          {patientsState.patients &&
            patientsState.patients.map((patient) => {
              return (
                <Marker position={[patient.latitude, patient.longitude]}>
                  <Popup>{patient.first_name}</Popup>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
export default Map;
