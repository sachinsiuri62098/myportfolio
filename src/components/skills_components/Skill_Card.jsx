import React from "react";

function Skills_Card(props) {
    return (
        <div className="py-5 border rounded-md bg-white">
            <img src={props.Skill_Img} className="w-20 mx-auto" />
            <h4 className="text-center py-2 text-md font-bold text-slate-500">{props.Skill_Name}</h4>
        </div>
    );
}

export default Skills_Card;