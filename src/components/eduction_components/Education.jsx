import React from "react";
import Education_Card from "./Education_Card";
import EducationList from "./Education_List";

function Education_View(val) {
    return (
        <Education_Card Image={val.image} Name={val.name} Disc={val.discription} />
    );
}

function Education() {
    return (
        <main className="bg-white py-10">
            <h1 className="text-center text-3xl font-bold pb-8 text-pink-400">Education</h1>
            <div className="container mx-auto p-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {EducationList.map(Education_View)}
            </div>
        </main>
    );
}

export default Education;