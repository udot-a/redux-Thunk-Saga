import React from "react";

export default ({post:{title}}) => {
    return (
        <div className={"card"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>
                    {"Title here: "}  {title}
                </h5>
            </div>
        </div>
    )
};