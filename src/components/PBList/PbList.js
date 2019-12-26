import React from "react";
import PBdevice from "./PBitem/PBdevice";
import { Fragment } from "react";

const PbList = ({ Terminals, getLocation }) => {
  
  const listItem = Terminals.map(item => {
    
    return (
      <PBdevice
        cityRU={item.cityRU}
        fullAddressRu={item.fullAddressRu}
        placeRu={item.placeRu}
        latitude={item.latitude}
        longitude={item.longitude}
        type = {item.type}
        getLocation={() => getLocation(item.fullAddressRu)}
      ></PBdevice>
    );
  });
  return <Fragment>{listItem}</Fragment>;
};

export default PbList;
