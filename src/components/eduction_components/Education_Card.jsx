import React from "react";

function Education_Card(props) {
    return (
        <div className="text-center border rounded-xl bg-white p-5 hover:bg-yellow-200">
            <img src={props.Image} className="w-20 mx-auto" />
            <h3 className="text-xl font-bold mb-2 text-slate-500">{props.Name}</h3>
            <p className="text-sm text-gray-500">{props.Disc}</p>
        </div>
    );
}

export default Education_Card;