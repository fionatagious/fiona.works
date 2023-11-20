import * as React from "react";
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
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: 30,
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
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
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <StyledTabs
          orientation={matches ? "vertical" : "horizontal"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="relevant-work-experiences"
          sx={{
            display: "flex",
            borderRight: "3px solid #94a3b8",
            zIndex: 0,
            minWidth: { xs: 200 },
          }}
        >
          {resumeBullets.map((item) => (
            <StyledTab
              key={item.index}
              label={item.organization}
              {...a11yProps(item.index)}
              sx={{ alignItems: "end", textAlign: "end" }}
            />
          ))}
        </StyledTabs>
        {resumeBullets.map((item) => (
          <ExperiencePanel value={value} index={item.index}>
            <div className="text-red-200 text-lg">{item.jobTitle}</div>
            <div className="text-sm sm:text-md text-white mt-2">
              <ul className="list-disc">
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
        className="items-center flex flex-grow text-red-200 justify-center sm:justify-end"
      >
        View my full resume&nbsp;
        <ExternalLinkIcon />
      </a>
    </>
  );
}
