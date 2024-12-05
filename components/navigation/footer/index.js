import React from "react";

const Footer = () => {
  return (
    <footer className="mx-0 bg-white border-gray border-t z-50">
      <div className="flex justify-center text-center text-mauve font-bold font-mono px-6">
        <span>
          Designed & built by Fiona Tang, using&nbsp;
          <a
            className="text-eggplant"
            href="https://nextjs.org/"
            target="_blank"
            tabIndex={-1}
          >
            Next
          </a>
          &nbsp;and&nbsp;
          <a
            className="text-eggplant"
            href="https://react.dev/"
            target="_blank"
            tabIndex={-1}
          >
            React
          </a>
          .
        </span>
      </div>
      <div
        id="cc"
        className="flex justify-center text-gray-600 text-center text-xs sm:text-sm font-mono mt-8 px-6"
      >
        <span>
          <p>
            <a
              className="link text-gray-600"
              href="https://fiona.works"
              property="dct:title"
              rel="cc:attributionURL"
            >
              fiona.works©
            </a>
            &nbsp;is licensed under a Creative Commons&nbsp;
            <a
              className="link text-gray-600"
              href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
            >
              Attribution-ShareAlike 4.0 International license.
              <span>
                {/* <img
                  className="object-contain h-full"
                  // style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                ></img>
                <img
                  className="object-contain h-full"
                  // style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                ></img>
                <img
                  className="object-contain h-full"
                  // style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                ></img> */}
              </span>
            </a>
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
