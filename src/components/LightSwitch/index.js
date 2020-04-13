import React from "react";
import Switch from "@material-ui/core/Switch";
import { Helmet } from "react-helmet";

import useLocalStorageState from "../../hooks/useLocalStorageState";

import "./style.scss";

const LightSwitch = () => {
  const [isLightOff, setIsLightOff] = useLocalStorageState("theme", false);

  const handleLightSwitch = (event) => {
    setIsLightOff(event.target.checked);
  };

  console.log('is light off?', isLightOff)

  return (
    <>
      <Helmet>
        <body data-theme={isLightOff ? "dark" : "light"} />
      </Helmet>
      <div className="lightswitch-container">
        <Switch
          checkedIcon={<span className="MuiSwitch-thumb"><i className="material-icons" style={{
            color: "#FFF",
            fontSize: "12px",
            position: "relative",
            top: "-10px",
          }}>brightness_2</i></span>}
          checked={isLightOff}
          onChange={handleLightSwitch}
          color="primary"
          inputProps={{ 'aria-label': 'dark light mode switch'}}
        />
      </div>
    </>
  )
};

export default LightSwitch;