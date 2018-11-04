import React from 'react';
import { geolocated } from 'react-geolocated';
import { saveUserLocationCoordinates } from '../redux/actions';
import { connect } from 'react-redux';

// function getUserLocation() {
//   return !this.props.isGeolocationAvailable ? <div>Your browser does not support Geolocation</div> : !this.props.isGeolocationEnabled
//         ? <div>Geolocation is not enabled</div> : this.props.saveUserLocationCoordinates
//           ? ''
//           : <div>Getting the location data&hellip; </div>;
// }

function getUserLocation () {
  const geolocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('No location data'));
    }
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject(new Error('Permission denied'));
    });
  });
  return this.props.saveUserLocationCoordinates(location);
}


const mapStateToProps = () => {
  return;
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserLocationCoordinates: (coordinates) => {
      dispatch(saveUserLocationCoordinates(coordinates));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(getUserLocation);

