import React from "react";
import Button from "../../components/Button/Button";
import style from "./heroSection.module.scss";

function HeroSection({ image = null, title = null, cta = null }) {
  return (
    <section
      className={style.heroSection}
      style={{ background: image ? `url(${image})` : null }}
    >
      <div className={style.wrapper}>
        {title && <h1 className={style.title}>{title}</h1>}
        <div className={style.button}>{cta && <Button {...cta} />}</div>
      </div>
    </section>
  );
}

export default HeroSection;
