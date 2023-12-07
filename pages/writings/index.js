import React from "react";
import { articles } from "../../consts";
import Grid from "@mui/material/Grid";

export default function Writings() {
  return (
    <Grid container className="px-4 flex flex-col p-4 overflow-auto">
      <Grid item xs={12} className="flex flex-row px-6">
        {articles.map((child) => (
          <div
            key={child.id}
            className="media text-left text-sm sm:text-lg text-pink border-2 min-w-[212px] w-[270px] my-2 mx-1 p-5 border-gray-300 hover:border-white hover:cursor-pointer hover:translate-y-[-2px]"
            onClick={() => {
              window.open(child.href, "_blank");
            }}
          >
            <div className="w-full h-[150px]">
              <img
                className="object-contain h-full"
                src={child.src}
                alt={child.alt}
              ></img>
            </div>
            <div className="article text-gray-300">{child.title}</div>
            <div className="text-pink font-mono text-sm">
              {child.organizationName}
            </div>
            <div className="text-sm text-gray-400 font-normal">
              {child.summary}
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
