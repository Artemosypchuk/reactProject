import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PbList from "./components/PBList/PbList"






class App extends React.Component {
  state = {
    Devices:[]
  }

 

render() { 
      let urlType = `https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=Zdolbuniv`;
     let Device =[] 
      let req = new Request(urlType);
      fetch(req)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setTimeout(() => {
            this.setState(()=>{
              this.state.Devices = [...this.state.Devices, data.devices]
              console.log(this.state.Devices)
            })
            
          },600)
        })
        .catch(() => {
          return console.log("error", req);
        });
   console.log(Device)
    
    
     
    return (
      <Router>
        <div className="container bootstrap snippet">
          <h1 onClick={this.GetURL}> Contact List </h1>
          {/* <PbList PBdevice={this.state.Devices}
            /> */}
          <Switch></Switch>
        </div>
      </Router>
    );
  }

}
ReactDOM.render(<App />, document.getElementById("root"));
