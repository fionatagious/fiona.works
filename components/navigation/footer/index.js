import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full z-50">
        <div className="container mx-auto px-6 mt-6">
          <hr />
          <div className="flex justify-center text-slate-400 py-10">
            <span>
              Designed and built by Fiona Tang, using&nbsp;
              <a href="https://nextjs.org/">Next</a>,&nbsp;
              <a href="https://mui.com/">Material</a>, and&nbsp;
              <a href="https://tailwindcss.com">Tailwind CSS</a>.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
