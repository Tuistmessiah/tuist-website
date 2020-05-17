import React from "react";
import style from "./heroSection.module.scss";

function HeroSection({ image = null, title = null, label = null }) {
  //const imageUrl = image || null; // TODO: Use this once DB is finished
  const imageUrl = "/images/tuist1.png";
  title = "Tuna Universitária do Instituto Superior Técnico";
  label = "Vem descobrir";

  return (
    <section
      className={style.heroSection}
      style={{ background: imageUrl ? `url(${imageUrl})` : null }}
    >
      <div className={style.wrapper}>
        {title && <h1 className={style.title}>{title}</h1>}
        {label && <p className={style.label}>{label}</p>}
      </div>
    </section>
  );
}

export default HeroSection;
