import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full py-1">
          <div className="flex justify-end items-center h-full">
            {/* <Logo /> */}
            <ul className="list-none sm:flex gap-x-8 text-pink">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/writings">
                  <p>Writings</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
