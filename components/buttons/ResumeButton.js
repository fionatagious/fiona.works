import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import StyledButton from "/components/buttons/StyledButton";

const ResumeButton = ({ buttonLabel, ...props }) => {
  return (
    <Link href="/resume" passHref>
      <StyledButton {...props}>{buttonLabel}</StyledButton>
    </Link>
  );
};

ResumeButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

ResumeButton.defaultProps = {
  buttonLabel: "Resume",
  buttonColor: "#d79eff",
};

export default ResumeButton;
