import React from "react";
import "./PB_Item.css";

// const e = React.createElement;

class PBdevice extends React.Component {
  state = {
    fullAddressRu:"Gonzo"
  };
  GetURL = () => {
    this.setState({
      fullAddressRu:this.props.fullAddressRu
    })
  }
  render() {
    console.log(this.props)
    return (
    <div className ="row d-flex flex-column">
        <h2 onClick={this.GetURL}>Hello PB</h2>
        <h3>{this.state.fullAddressRu}</h3>
        <button onClick={this.props.GetURL}>Батон</button>
      </div>
    );
  }
}

export default PBdevice;
