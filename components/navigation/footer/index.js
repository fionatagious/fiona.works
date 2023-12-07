import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center text-pink font-mono py-4">
        <span>
          Designed & built by Fiona Tang, using&nbsp;
          <a
            className="text-white"
            href="https://nextjs.org/"
            target="_blank"
            tabIndex="-1"
          >
            Next
          </a>
          ,&nbsp;
          <a
            className="text-white"
            href="https://react.dev/"
            target="_blank"
            tabIndex="-1"
          >
            React
          </a>
          , and&nbsp;
          <a
            className="text-white"
            href="https://tailwindcss.com"
            target="_blank"
            tabIndex="-1"
          >
            Tailwind CSS
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
