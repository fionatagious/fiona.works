import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/app/components/buttons/Button";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import { resumeBullets } from "../../../consts";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiTabs-indicatorSpan": {
    backgroundColor: "var(--slate-950)",
    width: "100%",
  },
  "& .MuiTabs-scrollButtons": {
    color: "var(--slate-950)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: "var(--gray-400)",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "var(--font-mono)",
    textTransform: "none",
    borderRadius: "0.5rem",
    marginRight: "0.3rem",
    zIndex: 5,
    "&:hover": {
      color: "var(--slate-950)",
    },
    "&.Mui-selected": {
      color: "var(--mauve)",
      backgroundColor: "var(--white)",
      border: "1px solid var(--slate-950)",
      fontWeight: "bold",
    },
    "&.Mui-focusVisible": {
      color: "var(--slate-950)",
      backgroundColor: "var(--white)",
    },
  })
);

const handleClick = () => {
  // open the resume in a new tab
  window.open("/resume", "_blank");
};

function ExperiencePanel(props) {
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

ExperiencePanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-ExperiencePanel-${index}`,
  };
}

export default function VerticalTabs() {
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
          <ExperiencePanel
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
          </ExperiencePanel>
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
          onClick={handleClick}
          icon={<ExternalLinkIcon />}
        />
      </div>
    </>
  );
}
