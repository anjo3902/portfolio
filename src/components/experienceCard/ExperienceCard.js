import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const TechTags = ({tech}) => {
    const TAG_COLORS = {
      Python: { bg: "#3776AB", color: "#ffffff" },
      PyMuPDF: { bg: "#6C5CE7", color: "#ffffff" },
      Whisper: { bg: "#1ABC9C", color: "#ffffff" },
      "Hugging Face": { bg: "#FF8900", color: "#ffffff" },
      Chroma: { bg: "#6F42C1", color: "#ffffff" },
      Streamlit: { bg: "#FF4B4B", color: "#ffffff" },
      XGBoost: { bg: "#2E3A59", color: "#ffffff" },
      NLP: { bg: "#00ADEF", color: "#ffffff" },
      "Web Scraping": { bg: "#FFB86B", color: "#000000" },
      "TF-IDF": { bg: "#00C2A8", color: "#000000" },
      KMeans: { bg: "#9B59B6", color: "#ffffff" }
    };

    return tech ? (
      <div className="experience-tech-tags">
        {tech.map((t, i) => {
          const style = TAG_COLORS[t] ? { background: TAG_COLORS[t].bg, color: TAG_COLORS[t].color } : {};
          return (
            <span key={i} className="tech-tag" style={style}>
              {t}
            </span>
          );
        })}
      </div>
    ) : null;
  };

  function openFirstFooterLink() {
    if (cardInfo.footerLink && cardInfo.footerLink.length > 0) {
      const url = cardInfo.footerLink[0].url;
      if (url) window.open(url, "_blank");
    }
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul className="experience-bullets">
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
        <TechTags tech={cardInfo.tech} />
        {cardInfo.footerLink ? (
          <div className="experience-cta">
            <button className="btn btn-primary" onClick={openFirstFooterLink}>
              View Project
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
