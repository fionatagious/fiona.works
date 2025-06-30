"use client";
import React, { useRef } from "react";

import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import InitialLogo from "../icons/InitialLogo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SiteLogo from "../icons/SiteLogo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return; // Avoid runtime error if element is not found

    var headerOffset = 150;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      id: 1,
      text: "About",
      href: "about",
      nodeRef: useRef(null),
    },
    // {
    //   id: 2,
    //   text: "Experience",
    //   href: "experience",
    //   nodeRef: useRef(null),
    // },
    {
      id: 2,
      text: "Projects",
      href: "projects",
      nodeRef: useRef(null),
    },
    {
      id: 3,
      text: "Media",
      href: "media",
      nodeRef: useRef(null),
    },
    {
      id: 4,
      text: "Contact",
      href: "contact",
      nodeRef: useRef(null),
    },
  ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        "key" in event &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#181B2A",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <div className="flex justify-end p-4">
        <button>
          <CloseIcon
            fontSize="large"
            style={{ color: "#d79eff", cursor: "pointer" }}
          />
        </button>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleScroll(item.href)}
              tabIndex={0}
              sx={{ textAlign: "center", padding: "1rem 0" }}
            >
              <ListItemText
                className="hamburger-animation"
                disableTypography
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="w-full h-20 sticky top-0 bg-white/70 backdrop-blur-lg border-b border-gray z-50">
      <div className="container mx-auto px-4 h-full py-1">
        {/* sticky menu */}
        <div className="hidden sm:flex justify-between gap-x-4 items-center h-full">
          <a href="/" className="hidden sm:flex ml-4">
            <SiteLogo />
          </a>
          <ul className="hidden list-none sm:flex sm:gap-x-4 sm:mr-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className="nav-animation"
                  onClick={() => handleScroll(item.href)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* hamburger menu */}
        {!matches &&
          (["right"] as Array<"right">).map((anchor) => (
            <div
              className="flex justify-between items-center w-full h-full sm:hidden"
              key={anchor}
            >
              <a href="/">
                <InitialLogo />
              </a>
              <button
                onClick={toggleDrawer(anchor, true)}
                className="inline-block bg-white/70 backdrop-blur-lg h-full"
              >
                <MenuIcon
                  fontSize="large"
                  style={{ color: "#6f4b79", cursor: "pointer" }}
                />
              </button>
              {typeof window !== "undefined" && mounted && (
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
