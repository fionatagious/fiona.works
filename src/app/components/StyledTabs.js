import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

export const StyledTabs = styled((props) => (
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
