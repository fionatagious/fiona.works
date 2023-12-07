import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import ExternalLinkIcon from "/components/icons/ExternalLinkIcon";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { resumeBullets } from "../consts";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
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
    width: "100%",
    backgroundColor: "var(--pink)",
  },
  "& .MuiTabs-scrollButtons": {
    color: "var(--pink)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: "var(--gray-400)",
    fontFamily: "var(--font-mono)",
    "&.Mui-selected": {
      color: "var(--pink)",
      backgroundColor: "transparent",
      fontWeight: "bold",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.open("/resume", "_blank");
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
            borderRight: { xs: "none", sm: "5px solid var(--slate-950)" },
            borderBottom: { xs: "3px solid var(--slate-950)", sm: "none" },
            zIndex: 0,
            minWidth: { xs: 200 },
          }}
        >
          {resumeBullets.map((item) => (
            <StyledTab
              key={item.index}
              label={item.organization}
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
            className="bg-transparent p-3 z-4"
          >
            <div className="text-pink font-mono font-bold text-lg">
              {item.jobTitle}
            </div>
            <div className="text-sm sm:text-lg text-gray-300 mt-2 sm:ml-9">
              <ul className="list-disc marker:text-pink">
                {item.children.map((child) => (
                  <li key={child.id}>{child.bullet}</li>
                ))}
              </ul>
            </div>
          </ExperiencePanel>
        ))}
      </Box>
      <div className="flex flex-col" onKeyDown={handleKeyPress} tabIndex={0}>
        <a
          href="/resume"
          target="_blank"
          className="max-w-fit flex flex-grow text-pink font-bold self-center mt-4 sm:self-end pr-0 sm:pr-8"
        >
          View my full resume&nbsp;
          <ExternalLinkIcon />
        </a>
      </div>
    </>
  );
}
