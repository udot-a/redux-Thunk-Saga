import React from "react";
import loader from "./Spinner-1s-200px.gif";
import "./Loader.css";

export default () => {
    return (
        <>
            <div className={"my-container"}/>
            <img src={loader} alt="Waiting for data loading ..."/>
        </>
    );
}
