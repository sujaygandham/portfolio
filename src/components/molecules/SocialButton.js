import { IconButton, Tooltip } from "@chakra-ui/core";
import Proptypes from "prop-types";
import React from "react";

const SocialButton = ({ icon, label, externalLink, ...rest }) => (
  <Tooltip label={label} placement="bottom" hasArrow>
  <IconButton
    as="a"
    href={externalLink}
    aria-label={label}
    borderRadius="30px"
    variant="outline"
    cursor="pointer"
    boxShadow="sm"
    size="lg"
    icon={icon}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  /></Tooltip>
);

SocialButton.propTypes = {
  imageUrl: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  externalLink: Proptypes.string,
};

export default SocialButton;
