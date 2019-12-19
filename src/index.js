import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PbList from "./components/PBList/PbList";
import Map from "./components/googleMap/gMap"


class App extends React.Component {
  state = {
    Devices: []
  };
  componentDidMount = () => {
    let urlType = `https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=Zdolbuniv`;

    let req = new Request(urlType);
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            Devices: data.devices
          };
        });
      })
      .catch(() => {
        return console.log("error", req);
      });
  };

  getLocation = fullAddressRu => {
    const index = this.state.Devices.findIndex(elem => elem.fullAddressRu === fullAddressRu);
    console.log(index)
  }
  render() {
    return (
      <Router>
        <div className="container bootstrap snippet">
          <h1 onClick={this.GetURL}> Choose your address PB </h1>
          <PbList Terminals={this.state.Devices}
          getLocation={this.getLocation} />
          <Map getLocation={this.getLocation} />
          <Switch></Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
