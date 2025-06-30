import React from "react";
import { projects } from "../consts";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Tag from "../components/Tag";

export default function Projects() {
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter") {
      window.open(href, "_blank");
    }
  };

  return (
    <Grid container className="px-0 4xl:px-4 py-4">
      <Grid
        item
        xs={12}
        className="flex flex-wrap justify-center px-0 4xl:px-6"
      >
        {projects.map((child) => (
          <div
            key={child.id}
            className="media text-left text-sm bg-white sm:text-lg text-mauve min-w-[212px] w-[340px] sm:w-[200px] my-1 mx-1 p-5 border rounded-md border-gray-400 hover:border-slate-950 hover:bg-eggplant/10 hover:brightness-75 hover:cursor-pointer"
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
                src={`/images/${child.src}`}
                alt={child.alt}
                width={200}
                height={200}
              ></Image>
            </div>

            <div>
              <div className="text-mauve font-mono text-sm leading-6">
                {child.projectName}
              </div>
              <div className="text-sm text-gray-600 font-mono whitespace-normal line-clamp-4 truncate">
                {child.summary}
              </div>
              <div className="flex flex-wrap mt-4 gap-2 ">
                {child.tags.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
