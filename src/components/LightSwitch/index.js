import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

import "./style.css";

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightSwitch = (event) => {
    setIsLightOn(event.target.checked);
  };

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