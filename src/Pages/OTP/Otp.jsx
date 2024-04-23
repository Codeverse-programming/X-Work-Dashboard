/* eslint-disable no-unused-vars */
import React from 'react'

const Otp = () => {
    return (
        <div>
            <div className=" w-96 container h-fit rounded bg-white shadow-lg p-5 mx-auto mt-20 lg:mt-20">
                <div className="headiing mt-5">
                    <h1 className="font-bold text-lg lg:text-2xl mb-3 text-newcolor1">OTP Page</h1>
                    <p className=" text-sm">Enter OTP</p>
                </div>
                <form action="">
                    <div className="input-control mt-5">
                        <h3 className=" text-newcolor1 font-bold mb-3">OTP</h3>
                        <input type="text" placeholder=" Example@gmail.com" className=" w-full rounded-lg p-3 lg:p-5 focus:bg-none" />
                    </div>
                    <div className="login my-5">
                        <a href="">
                            <button className=" bg-newcolor1 text-white w-full rounded-md p-2 lg:p-5 text-xl">Login</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Otp