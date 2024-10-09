import React from "react";
import Skills_Card from "./Skill_Card";
import SkillList from "./Skill_List";

function Skill_View(val) {
    return (
        <Skills_Card Skill_Img={val.image} Skill_Name={val.name} />
    );
}

function Skills() {
    return (
        <div className="py-10 bg-gray-100">
            <h1 className="text-center text-3xl font-bold pb-8 text-blue-400">Skills</h1>
            <div className="container mx-auto p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:px-22 lg:px32 gap-4">
                {SkillList.map(Skill_View)}
            </div>
        </div>
    );
}

export default Skills;