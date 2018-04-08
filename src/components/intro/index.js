import React from "react";
const Intro = ({
    loading,
    mask,
    resetLoading,
    doLoading,
}) => <div style={{color: 'red', display: loading ? 'none' : 'block'}} onClick={doLoading}>{`norton-state is coming`}</div>;
export default Intro;
