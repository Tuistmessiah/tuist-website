import React from "react";
import Icon from "../Icon/Icon";
import style from "./button.module.scss";

function Button({ label = null, slug = null }) {
  return (
    <a href={slug} className={style.container}>
      {label && <p className={style.label}>{label}</p>}
      <Icon className={style.icon} type="arrow" />
    </a>
  );
}

export default Button;
