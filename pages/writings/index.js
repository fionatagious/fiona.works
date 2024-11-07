import React from "react";
import { articles } from "../../consts";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Writings() {
  const handleKeyDown = (event, href) => {
    if (event.key === "Enter") {
      window.open(href, "_blank");
    }
  };

  return (
    <Grid container className="px-0 4xl:px-4 py-4">
      <Grid
        item
        xs={12}
        className="flex flex-row flex-wrap justify-center px-0 4xl:px-6"
      >
        {articles.map((child) => (
          <div
            key={child.id}
            className="media text-left text-sm sm:text-lg text-mauve min-w-[212px] w-[340px] sm:w-[200px] my-1 mx-1 p-5 border rounded-md border-gray-400 hover:border-slate-950 hover:brightness-75 bg-white hover:cursor-pointer hover:translate-y-[-2px]"
            onClick={() => {
              window.open(child.href, "_blank");
            }}
            onKeyDown={(event) => {
              handleKeyDown(event, child.href);
            }}
            tabIndex={0}
          >
            <div className="flex w-full sm:h-[150px] justify-center">
              <Image
                className="object-contain h-full"
                src={child.src}
                alt={child.alt}
                width={200}
                height={200}
              ></Image>
            </div>

            <div>
              <div className="text-sm sm:text-md font-mono text-slate-950 mt-2 leading-6">
                {child.title}
              </div>
              <div className="text-mauve font-mono text-sm leading-6">
                {child.organizationName}
              </div>
              <div className="text-sm text-gray-600 font-normal whitespace-normal line-clamp-4 truncate">
                {child.summary}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
