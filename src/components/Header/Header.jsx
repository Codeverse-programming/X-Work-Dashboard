/* eslint-disable no-unused-vars */
import React from 'react'
import user from './user.png'
import { Avatar, Dropdown } from "flowbite-react";


const Header = () => {
    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className=" flex justify-between w-full">
                        <div className="block">
                            <a href="./post.html">
                                <h1 className=" font-bold text-4xl">X-Work</h1>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <Dropdown
                                    label={<Avatar alt="User settings" img={user} rounded />}
                                    arrowIcon={false}
                                    inline
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">Bonnie Green</span>
                                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header