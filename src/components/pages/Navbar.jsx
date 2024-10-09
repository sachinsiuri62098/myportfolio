import React, { useState } from "react";
import LogoImage from '../images/image2.png'
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

function Navbar() {
    return (
        <>
            <nav className="shadow bg-white sticky top-0 left-0 right-0">
                <div className="w-full container mx-auto inline-block lg:flex justify-between lg:px-4">
                    <Navbarlogo />
                    <Navbarlinks />
                    <BarBtn />
                </div>
            </nav>
        </>
    );
};
export default Navbar;

const Navbarlogo = () => {
    return (
        <div className=" w-64 h-20 p-3">
            <Link to="/"><img src={LogoImage} className=" w-full h-full" /></Link>
        </div>
    );
}

const Navbarlinks = () => {
    return (
        <>
            <div className="hidden lg:flex lg:h-14 py-3 lg:my-auto">
                <ul className="lg:flex items-center font-semibold">
                    <li className="mx-4 my-4 lg:my-0 text-blue-700 hover:text-yellow-400 cursor-pointer">
                        <Link to="/">Home</Link></li>
                    <li className="mx-4 my-4 lg:my-0 text-blue-700 hover:text-yellow-400 cursor-pointer">
                        <Link to="/about">About</Link></li>
                    <li className="mx-4 my-4 lg:my-0 text-blue-700 hover:text-yellow-400 cursor-pointer">
                        <Link to="/project">Project</Link></li>
                    <li className="mx-4 my-4 lg:my-0 text-blue-700 hover:text-yellow-400 cursor-pointer">
                        <Link to="/contact">Contact</Link></li>
                </ul>
                {/* register and login button */}
                <div className="md:flex ms-2 font-semibold">
                    <Link to="/register">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black mx-2 px-4 py-1.5 rounded">Register</button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-green-600 hover:bg-green-700 text-white mx-2 px-4 py-1.5 rounded">Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

function BarBtn() {
    const [isMenuopen, setIsMenuopen] = useState(false)
    return (
        <>
            <button onClick={() => setIsMenuopen(!isMenuopen)} type="button" className="lg:hidden text-xl absolute right-5 top-0 mt-7">
                {isMenuopen ? <MdClose /> : <HiMiniBars3 />}
            </button>
            {isMenuopen ? <ResponsiveMenu /> : ""}
        </>
    )
}

function ResponsiveMenu() {
    return (
        <div className="w-full lg:hidden absolute top-[100%] bg-white border-t">
            <ul className="">
                <li className="mx-4 my-4 text-blue-700 font-medium hover:text-yellow-400 cursor-pointer">
                    <Link to="/">Home</Link></li>
                <li className="mx-4 my-4 text-blue-700 font-medium hover:text-yellow-400 cursor-pointer">
                    <Link to="/about">About</Link></li>
                <li className="mx-4 my-4 text-blue-700 font-medium hover:text-yellow-400 cursor-pointer">
                    <Link to="/project">Project</Link></li>
                <li className="mx-4 my-4 text-blue-700 font-medium hover:text-yellow-400 cursor-pointer">
                    <Link to="/contact">Contact</Link></li>
            </ul>
            {/* register and login button */}
            <div className="my-2">
                <Link to="/register">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mx-2 px-4 py-2 rounded">Register</button>
                </Link>
                <Link to="/login">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold mx-2 px-4 py-2 rounded">Login</button>
                </Link>
            </div>
        </div>
    )
}