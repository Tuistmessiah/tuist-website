import { oneOf } from "prop-types";
import React from "react";
import Arrow from "./icons/arrow";

const icons = {
  arrow: Arrow,
  document: "div",
};

Icon.propTypes = {
  type: oneOf(Object.keys(icons)).isRequired,
};

function Icon({ type, fill, ...rest }) {
  const IconComp = icons[type];
  if (!type || type === "") return null;
  return <IconComp {...rest} fill={fill} />;
}

export default Icon;
