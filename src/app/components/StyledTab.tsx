import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

interface StyledTabProps extends React.ComponentProps<typeof Tab> {}

const StyledTab = styled(({ ...props }: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
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
}));

export default StyledTab;
