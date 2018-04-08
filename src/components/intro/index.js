import React from "react";
const Intro = ({
    asType,
    tbkt,
    changeValue,
    resetLoading,
}) => <div style={{color: 'red', display: tbkt !== 'F' ? 'none' : 'block'}} onClick={resetLoading}>{`${asType} ${tbkt} is coming`}</div>;
export default Intro;
