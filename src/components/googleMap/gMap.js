import React, { Component } from "react";
import GoogleMapReact from "google-map-react";



class Map extends Component {
  state = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 5
  };

  Show = () => {
    let loc = {
      lat: this.props.LocationItem.longitude,
      lng: this.props.LocationItem.latitude
    }
    this.setState({
      center:loc
    })
    console.log(this.state.center)
}

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "40vh", width: "100%" }}>
        <button onClick={this.Show}></button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
