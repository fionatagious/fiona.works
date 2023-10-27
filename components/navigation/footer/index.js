import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-20">
        <div className="container mx-auto px-6 bg-indigo-950 items-center gap-x-8 text-white mt-6">
          <hr />
          <div className="justify-right text-pink">
            Built using Next and Tailwind. I used&nbsp;
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
            for social media icons.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
