import React from "react";

export default ({alert}) => {
    return (
        <div className="alert alert-warning" role="alert">
            {alert}
        </div>

    );
}