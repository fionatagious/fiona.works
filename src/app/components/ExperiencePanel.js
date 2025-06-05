import React from "react";

import { Button } from "@/app/components/buttons/Button";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import { resumeBullets } from "../consts";
import { StyledTab } from "@/app/components/StyledTab";
import { StyledTabs } from "@/app/components/StyledTabs";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Panel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`vertical-ExperiencePanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ExperiencePanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location = "mailto:fionatagious@gmail.com";
    }
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-ExperiencePanel-${index}`,
    };
  }
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <StyledTabs
          allowScrollButtonsMobile
          aria-label="tabbed-work-experiences"
          onChange={handleChange}
          orientation={matches ? "vertical" : "horizontal"}
          scrollButtons
          value={value}
          variant="scrollable"
          sx={{
            display: "flex",
            borderRight: { xs: "none", sm: "5px solid var(--mauve)" },
            borderBottom: { xs: "3px solid var(--mauve)", sm: "none" },
            zIndex: 0,
            minWidth: { xs: 200 },
          }}
        >
          {resumeBullets.map((item) => (
            <StyledTab
              key={item.index}
              label={item.organization}
              tabIndex={0}
              {...a11yProps(item.index)}
              sx={{ alignItems: { xs: "center", sm: "end" }, textAlign: "end" }}
            />
          ))}
        </StyledTabs>
        {resumeBullets.map((item) => (
          <Panel
            key={item.index}
            value={value}
            index={item.index}
            className="bg-white rounded-tr-lg rounded-br-lg p-2 z-4 border border-gray-400 shadow-lg shadow-gray-200"
          >
            <div className="text-mauve font-mono font-bold text-lg">
              {item.jobTitle}
            </div>
            <div className="text-sm sm:text-lg text-slate-950 mt-2 sm:ml-9">
              <ul className="list-disc marker:text-mauve">{item.summary}</ul>
            </div>
          </Panel>
        ))}
      </Box>
      <div
        className="flex justify-center mt-6 mb-2"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Button
          className="text-eggplant bg-lightMauve/20 font-normal font-mono border-[1px] border-slate-950 rounded-lg p-4 group hover:bg-eggplant hover:text-white transition duration-200 ease-in-out"
          label="View my resume"
          onClick={() => window.open("/resume", "_blank")}
          icon={<ExternalLinkIcon />}
        />
      </div>
    </>
  );
}
