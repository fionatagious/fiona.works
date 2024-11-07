import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import StyledButton from "/components/buttons/StyledButton";

const EmailButton = ({ buttonLabel, ...props }) => {
  return (
    <Link href="mailto:fionatagious@gmail.com" passHref>
      <StyledButton {...props}>{buttonLabel}</StyledButton>
    </Link>
  );
};

EmailButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

EmailButton.defaultProps = {
  buttonLabel: "Email me",
  buttonColor: "#956f9f",
};

export default EmailButton;
