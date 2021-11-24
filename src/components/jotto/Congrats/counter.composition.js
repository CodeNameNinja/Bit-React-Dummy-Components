import React from "react";
import Congrats from "./congrats";

export const CongratsSuccess = () => {
    return <Congrats success={true}/>;
};

export const CongratsFail = () => {
    return <Congrats success={false}/>;
};