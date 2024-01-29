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
            className="bg-white border rounded-tr-lg rounded-br-lg border-slate-950 p-2 z-4 shadow-lg shadow-gray-400"
          >
            <div className="text-mauve font-mono font-bold text-lg">
              {item.jobTitle}
            </div>
            <div className="text-sm sm:text-lg text-slate-950 mt-2 sm:ml-9">
              <ul className="list-disc marker:text-mauve">
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
          className="darken max-w-fit flex flex-grow text-mauve font-bold self-center mt-4 sm:self-end pr-0 sm:pr-8"
        >
          View my full resume&nbsp;
          <ExternalLinkIcon />
        </a>
      </div>
    </>
  );
}
