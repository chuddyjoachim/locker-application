import React from 'react'

const Header = () => {
    return (
        <>          
        <div className="wrapper bg-yellow-200 p-3 pl-10 pr-7">
        <div className="outset flex flex-row space-x-2 justify-between items-center">
            <div className="left-div bg-black"><h4 className="p-2 text-white font-bold">HUBLOCKER</h4></div>
            <div className="center-div colors.red">
                <ul className="flex flex-row space-x-4 items-center font-medium">
                    <li className="font-semibold">
                    Home
                    </li>
                    <li>
                    Find a locker
                    </li>
                    <li>
                    Size guide
                    </li>
                    <li>
                    Locations
                    </li>
                    <li>
                    Help center
                    </li>
                </ul>
            </div>
            <div className="right-div ">
            <ul className="flex flex-row space-x-10 items-center font-medium">
                    <li>
                    My account
                    </li>
                    <li>
                    081-3872-3836
                    </li>
                    <li>
                    <span className="rounded-2xl p-2 bg-green-400 bg-opacity-40 text-white">Pay your bill</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default Header
