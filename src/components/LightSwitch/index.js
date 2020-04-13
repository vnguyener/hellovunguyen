import React from "react";
import Switch from "@material-ui/core/Switch";

import useLocalStorageState from "../../hooks/useLocalStorageState";

import "./style.css";

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useLocalStorageState("theme", false);

  const handleLightSwitch = (event) => {
    setIsLightOn(event.target.checked);
  };

  console.log('is light on?', isLightOn)

  return (
    <div className="lightswitch-container">
      <Switch
        checked={isLightOn}
        onChange={handleLightSwitch}
        color="primary"
        inputProps={{ 'aria-label': 'dark light mode switch'}}
      />
    </div>
  )
};

export default LightSwitch;