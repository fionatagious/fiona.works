import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

interface StyledTabsProps extends React.ComponentProps<typeof Tabs> {}

const StyledTabs = styled(({ ...props }: StyledTabsProps) => (
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

export default StyledTabs;
