import React from "react";
import "./PB_Item.css";

class PBdevice extends React.Component {
  state = {
    cityRU: this.props.cityRU,
    fullAddressRu: this.props.fullAddressRu,
    placeRu: this.props.placeRu,
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    type: this.props.type
  };

  render() {

    const { cityRU, fullAddressRu, placeRu, latitude, longitude,type } = this.state;
    return (
      <div className="col-8 offset-2  d-flex flex-column">
        <h2>{cityRU}</h2>
        <ul>
          <li>{fullAddressRu}</li>
        </ul>
        <p className="offset-5">{placeRu}</p>
        <p>Банкомат типа: "{type}"</p>
        <small>координаты: {latitude},{longitude}</small>
        <div className='map'>
          <button className='btn btn-outline-warning' onClick={this.props.getLocation}>Show on map</button>
        </div>
      </div>
    );
  }
}

export default PBdevice;
