import React from "react";
import "./PB_Item.css";

class PBdevice extends React.Component {
  state = {
    cityRU: this.props.cityRU,
    fullAddressRu: this.props.fullAddressRu,
    placeRu: this.props.placeRu,
    latitude: this.props.latitude,
    longitude: this.props.longitude
  };

  render() {
    
    console.log(this.props);
    const{cityRU,fullAddressRu,placeRu,latitude,longitude}=this.state
    return (
      <div className="row d-flex flex-column">
        <h2>{cityRU}</h2>
        <h6>{fullAddressRu}</h6>
        <div>
          <button onClick={this.props.getLocation}></button>
        </div>
      </div>
    );
  }
}

export default PBdevice;
