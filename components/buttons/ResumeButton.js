import React from "react";
import PropTypes from "prop-types";

import ExternalLinkIcon from "/components/icons/ExternalLinkIcon";
import Link from "next/link";
import StyledButton from "/components/buttons/StyledButton";

const ResumeButton = ({ buttonLabel, ...props }) => {
  return (
    <Link href="/resume" target="_blank" passHref>
      <StyledButton {...props}>
        <div className="inline-flex items-center">
          {buttonLabel}
          <ExternalLinkIcon />
        </div>
      </StyledButton>
    </Link>
  );
};

ResumeButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

ResumeButton.defaultProps = {
  buttonLabel: "View my resume",
  buttonColor: "#6f4b79",
};

export default ResumeButton;
