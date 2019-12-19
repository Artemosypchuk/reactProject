import React,{Component} from "react"
import GoogleMapReact from 'google-map-react';
const GooMap = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
    state={
        
    }
  static defaultProps = {
    center: {
      lat: 50.61,
      lng: 26.25
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <GooMap
            lat={50.619154}
            lng={26.252096}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;