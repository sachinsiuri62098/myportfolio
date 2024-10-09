import React from "react";
import ProjectList from "./Project_List"

function P(val) {
    return (
        <img src={val.image} className="w-screen h-[180px] rounded" />
    );
}

function Project() {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-center text-3xl font-bold py-10 text-pink-700">Project</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {ProjectList.map(P)}
                </div>
            </div>
        </>
    );
}
export default Project;