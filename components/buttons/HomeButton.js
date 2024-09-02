import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import StyledButton from "/components/buttons/StyledButton";

const HomeButton = ({ buttonLabel, ...props }) => {
  return (
    <Link href="/" passHref>
      <StyledButton {...props}>{buttonLabel}</StyledButton>
    </Link>
  );
};

HomeButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

HomeButton.defaultProps = {
  buttonLabel: "Home",
  buttonColor: "#d79eff",
};

export default HomeButton;
