import React from "react";
import Button from "../../components/Button/Button";
import style from "./heroSection.module.scss";
import Iframe from "react-iframe";

function HeroSection({ image = null, title = null, cta = null }) {
  const url1 =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/234430574&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  return (
    <section
      className={style.heroSection}
      style={{ background: image ? `url(${image})` : null }}
    >
      <div className={style.wrapper}>
        {title && <h1 className={style.title}>{title}</h1>}
        <div className={style.button}>{cta && <Button {...cta} />}</div>
      </div>

      {/* <audio controls>
        <source
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/234430574&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true%22%3E"
          type="audio/ogg"
        />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}

      <Iframe url={url1} position="relative" />

      {/* <iframe
        title="asdas"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={url1}
      ></iframe> */}
    </section>
  );
}

export default HeroSection;
