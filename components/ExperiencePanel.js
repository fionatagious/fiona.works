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
    color: "var(--trueBlue)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: "var(--zinc-950)",
    fontFamily: "var(--font-mono)",
    "&.Mui-selected": {
      color: "#3066BE",
      backgroundColor: "white",
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
      role="ExperiencePanel"
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
            borderRight: { xs: "none", sm: "3px solid #94a3b8" },
            borderBottom: { xs: "3px solid #94a3b8", sm: "none" },
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
            className="bg-white p-3 z-4 border-t-2 border-b-2 border-r-2 border-gray"
          >
            <div className="text-trueBlue font-mono font-bold text-lg">
              {item.jobTitle}
            </div>
            <div className="text-sm sm:text-md text-zinc-950 mt-2 sm:ml-9">
              <ul className="list-disc marker:text-trueBlue">
                {item.children.map((child) => (
                  <li key={child.id}>{child.bullet}</li>
                ))}
              </ul>
            </div>
          </ExperiencePanel>
        ))}
      </Box>
      <a
        href="/resume"
        target="_blank"
        className="items-center flex flex-grow text-trueBlue font-bold justify-center sm:justify-end mt-4"
      >
        View my full resume&nbsp;
        <ExternalLinkIcon />
      </a>
    </>
  );
}
