import React from "react";
import { articles } from "../../consts";
import Grid from "@mui/material/Grid";

export default function Writings() {
  const handleKeyDown = (event, href) => {
    if (event.key === "Enter") {
      window.open(href, "_blank");
    }
  };

  return (
    <Grid container className="flex px-0 4xl:px-4 py-4 overflow-auto">
      <Grid item xs={12} className="flex flex-row px-0 4xl:px-6">
        {articles.map((child) => (
          <div
            key={child.id}
            className="media text-left text-sm sm:text-lg text-pink border-2 min-w-[212px] w-[270px] my-2 mx-1 p-5 border-gray-300 hover:border-white hover:cursor-pointer hover:translate-y-[-2px]"
            onClick={() => {
              window.open(child.href, "_blank");
            }}
            onKeyDown={(event) => {
              handleKeyDown(event, child.href);
            }}
            tabIndex={0}
          >
            <div className="w-full h-[150px]">
              <img
                className="object-contain h-full"
                src={child.src}
                alt={child.alt}
              ></img>
            </div>

            <div>
              <div className="article text-gray-300">{child.title}</div>
              <div className="text-pink font-mono text-sm">
                {child.organizationName}
              </div>
              <div className="text-sm text-gray-400 font-normal">
                {child.summary}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
