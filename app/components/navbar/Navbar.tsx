import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-8 z-10 relative">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-2xl"
              src="/assets/logo/308380667_490317966437829_8274158350038558168_n.jpg"
              alt="logo"
              width={70}
              height={70}
            />
            <h2 className="roboto-condensed text-4xl font-semibold">M.B.P.</h2>
          </div>
          <div className="flex items-center gap-10 font-[500]">
            <Link className="group active" href="/">HOME <div className="nav-list-border w-1/3 group-hover:w-full"></div></Link>
            <Link className="group" href="/project">PROJECTS <div className="nav-list-border w-0 group-hover:w-full"></div></Link>
            <Link className="group" href="/about">ABOUT US <div className="nav-list-border w-0 group-hover:w-full"></div></Link>
            <Link className="group" href="/blogs">BLOGS <div className="nav-list-border w-0 group-hover:w-full"></div></Link>
          </div>

          <div>
            <Link href="/login">
              <div className="wrap">
                <button className="button-login">Login</button>
              </div>
            </Link>
          </div>

        </nav>
    );
};

export default Navbar;