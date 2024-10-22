import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css"

const Header = ({currentpage}) => {
    const [display, setDisplay] = useState(false);

    const toggleOnOff = () => {
        setDisplay(!display);
    }

    return( 
        <header className="pt-5 pr-[6.3rem] custom-story:pr-[2.3rem] text-[#12305B]">
            <section className="flex items-center custom-max:justify-between custom-max:grid custom-max:grid-cols-2 custom-max:gap-5 custom-min:gap-[8rem]">
                <div className="">
                    <Link to="/">
                        <img className="w-20" src="src/assets/home/sleepstiq.png" alt="sleepstiq logo" />
                    </Link>
                </div>

                <div className={`custom-min:hidden custom-max:justify-self-end`} >
                    <GiHamburgerMenu onClick={toggleOnOff} className="text-2xl"/>
                </div>

                <nav className={`${display ? "flex" : "hidden"} custom-max:col-span-2 custom-max:justify-center custom-max:bg-white custom-max:${currentpage.includes("about") || currentpage.includes("shop") ? "bg-opacity-50" : "bg-transparent"} custom-min:flex`}>
                    <ul className=" list-none flex gap-[2rem] custom-max:grid custom-max:w-full custom-max:text-center custom-max:gap-6">
                        <li><NavLink className="custom-max:w-full custom-max:block p-2" to="/">Home</NavLink></li>
                        <li><NavLink className="custom-max:w-full custom-max:block p-2" to="about">About</NavLink></li>
                        <li><NavLink className="custom-max:w-full custom-max:block p-2" to="shop">Shop</NavLink></li>
                        <li><NavLink className="custom-max:w-full custom-max:block p-2" to="faq">FAQs</NavLink></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;