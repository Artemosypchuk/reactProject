import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PbList from "./components/PBList/PbList";
import Search from "./components/search/search";
import Map from "./components/googleMap/gMap";

class App extends React.Component {
  state = {
    Devices: [],
    DeviceItem: [],
    city: "Млинів"
  };
  componentDidMount = () => {
    let urlType = `https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=${this.state.city}`;

    let req = new Request(urlType);
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.devices);
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
  shouldComponentUpdate(nextProps, nextState) {
    let urlType = `https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=${nextState.city}`;


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
    return true;
  }

  getLocation = fullAddressRu => {
    const index = this.state.Devices.findIndex(
      elem => elem.fullAddressRu === fullAddressRu
    );
    let Item = [];
    this.Item = [...Item, this.state.Devices[index]];
    this.setState(() => {
      return {
        DeviceItem: this.state.Devices[index]
      };
    });
  };
  GetTown = city => {
    this.setState({
      city: city
    });
  };
  render() {
    return (
      <Router>
        <div className="container bootstrap snippet">
          <h1 onClick={this.GetURL}> Choose your address PB </h1>
          <Search GetTown={this.GetTown}></Search>
          <PbList
            Terminals={this.state.Devices}
            getLocation={this.getLocation}
          />
          <Map LocationItem={this.state.DeviceItem} />
          <Switch></Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
