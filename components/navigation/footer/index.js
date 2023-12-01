import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center text-pink font-mono py-4">
        <span>
          Designed & built by Fiona Tang, using&nbsp;
          <a
            className="text-lightBlue"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next
          </a>
          ,&nbsp;
          <a
            className="text-lightBlue"
            href="https://react.dev/"
            target="_blank"
          >
            React
          </a>
          , and&nbsp;
          <a
            className="text-lightBlue"
            href="https://tailwindcss.com"
            target="_blank"
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
