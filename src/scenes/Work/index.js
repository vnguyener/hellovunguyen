// @flow
import React from 'react';
import Resizable from "resizables";

const WorkPage = () => {

  return (
    <>
      <Resizable
        key={"demo"} // key used mainly for local storage if we have multiple resizable uses
        showResizable={true} // condition to show or hide resizables or not
        hideInitial={false} // if we want to hide the first child on init
        onResize={() => {}} // callback on resize
      >
        <div>left side</div>
        <div>right side</div>
      </Resizable>
    </>
  );
};

export default WorkPage;
