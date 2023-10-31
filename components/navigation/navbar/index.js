import React from "react";
import Link from "next/link";
import ResumeButton from "/components/buttons/ResumeButton";
// import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-slate-950">
        <div className="container mx-auto px-4 h-full py-1">
          <div className="flex justify-end gap-x-4 items-center h-full">
            {/* <Logo /> */}
            <ul className="list-none sm:flex gap-x-8">
              <li>
                <Link className="link-animation" href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <a className="link-animation" href="/contact">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
