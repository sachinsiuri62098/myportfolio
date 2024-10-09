import React from "react";
import Skills from "../skills_components/Skills";
import Education from "../eduction_components/Education";
import ProfileImg from '../images/profile2.jpg';
import What from "../images/whatsapp.png";
import FB from "../images/facebook.png";
import Insta from "../images/instagram.png";
import Linked from "../images/linkedin.png";
import Gmail from "../images/gmail.png";
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <div className="home">
                <div className="container mx-auto p-4 grid md:grid-cols-2 gap-4">
                    <Profile_Details />
                    <Profile_Image />
                </div>
                <Education />
                <Skills />
            </div>
        </>
    );
}
export default Home;

function Profile_Details() {

    return (
        <>
            <div className="md:px-7 py-2 md:py-8">
                <h4 className="text-2xl font-bold my-2 text-yellow-400">Hi,</h4>
                <h2 className="text-3xl font-bold">I,m <span className="text-orange-500">Sachin</span></h2>
                <h2 className="text-3xl font-bold text-green-500">a Frontend Developer</h2>
                <p className="text-sm mt-3 mb-8 text-justify text-gray-800">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <Social_Links />
                <Link to="/about">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium m-2 px-4 py-1 rounded">About me</button>
                </Link>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium m-2 px-4 py-1 rounded">Download Resume</button>
            </div>
        </>
    );
}

function Profile_Image() {
    return (
        <>
            <div className="flex justify-end">
                <img src={ProfileImg} className="w-screen md:w-[450px] md:h-[400px]" />
            </div></>
    );
}

function Social_Links() {
    return (
        <>
            <ul className="flex mb-4">
                <li className="cursor-pointer">
                    <a href="https://wa.me/6209812203" target="_blank"><img src={What} className="w-[30px] mx-2 rounded-full" /></a>
                </li>
                <li className="cursor-pointer">
                    <a href="https://facebook.com" target="_blank"><img src={FB} className="w-[30px] mx-2 rounded-full" /></a>
                </li>
                <li className="cursor-pointer">
                    <a href="https://instagram.com" target="_blank"><img src={Insta} className="w-[30px] mx-2 rounded-full" /></a>
                </li>
                <li className="cursor-pointer">
                    <a href="https://linkedin.com" target="_blank"><img src={Linked} className="w-[30px] mx-2 rounded-full" /></a>
                </li>
                <li className="cursor-pointer">
                    <a href="mailto:sachinsiuri@gmail.com"><img src={Gmail} className="w-[30px] mx-2 rounded-full" /></a>
                </li>
            </ul>
        </>
    );
}

