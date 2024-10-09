import React from "react";
import { Link } from "react-router-dom";
import LoginLogo from "../images/user_logo.png"

function Login() {
    return (
        <>
            <main className="login-bg">
                <div className="container mx-auto px-4 pt-20 font-roboto">
                    {/* Login Input box */}
                    <div className="w-full sm:w-[350px] border sm:mx-auto p-5 rounded-lg bg-slate-200">
                        <div className="text-center">
                            <img src={LoginLogo} alt="" className="w-20 mx-auto -mt-14" />
                            <h4 className="font-bold text-2xl py-3 text-blue-500">Login</h4>
                        </div>
                        <form action="">
                            <label className="text-gray-700" htmlFor="username">Username</label>
                            <input className="w-full border mb-2 px-2 py-1 rounded-md outline-none bg-slate-50" type="text" id="username" placeholder="Enter Username" name="" />
                            <label className="text-gray-700" htmlFor="password">Password</label>
                            <input className="w-full border mb-2 px-2 py-1 rounded-md outline-none bg-slate-50" type="password" id="password" placeholder="Enter Password" name="" />
                            <a href="" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
                            <button className="w-full p-1 my-3 bg-green-600 rounded-md text-white hover:bg-green-700" type="submit">Login</button>
                            <p className="text-sm">Not a member?<a href="" className="text-blue-600 hover:underline ms-1"><Link to="/register">register</Link></a></p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Login;