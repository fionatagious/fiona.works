import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="flex justify-center text-navyBlue py-4">
        <span>
          Designed and built by Fiona Tang, using&nbsp;
          <a className="text-trueBlue" href="https://nextjs.org/">
            Next
          </a>
          ,&nbsp;
          <a className="text-trueBlue" href="https://mui.com/">
            Material
          </a>
          , and&nbsp;
          <a className="text-trueBlue" href="https://tailwindcss.com">
            Tailwind CSS
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
