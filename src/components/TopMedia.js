import React from "react";

const TopMedia = () => {
  return (
    <aside className="top-media">
      <p className="top-media__slogan">
        Mam nadzieję, że czujesz się dziś pięknie!
      </p>

      <a
        href="https://www.facebook.com/studiomakijazu.sgrygiel"
        target="_blank"
        rel="noreferrer"
      >
        <i className="top-media__link fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://www.instagram.com/sylwiagrygiel_p.mu/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="top-media__link fa-brands fa-instagram"></i>
      </a>
    </aside>
  );
};

export default TopMedia;
