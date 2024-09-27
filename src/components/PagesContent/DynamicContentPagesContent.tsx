import styles from "./PagesContent.module.scss";
import { ReactComponent as SourceIcon } from "assets/images/icon-source.svg";
import { ButtonPageContent } from "./ButtonPageContent";
import { ExtraInfoPageContent } from "./ExtraInfoPageContent";
import { useEffect, useState } from "react";

interface DynamicContentPagesContentProps {
  planetImage?: string;
  image: string;
  name: string;
  content: string;
  source: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  handleButton: (section: "overview" | "structure" | "geology") => void;
  activeSection: "overview" | "structure" | "geology";
}

export const DynamicContentPagesContent = ({
  planetImage,
  image,
  name,
  content,
  source,
  rotation,
  revolution,
  radius,
  temperature,
  handleButton,
  activeSection,
}: DynamicContentPagesContentProps) => {
  const [smallScreen, setSmallScreen] = useState({
    mobileSize: window.matchMedia("(max-width: 576px)").matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen({
        mobileSize: window.matchMedia("(max-width: 576px)").matches,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.planetImageContainer}>
        {smallScreen.mobileSize && (
          <div className={styles.buttons_mobile}>
            <ButtonPageContent
              number=""
              text="OVERVIEW"
              active={activeSection === "overview"}
              handleButton={() => handleButton("overview")}
            />
            <ButtonPageContent
              number=""
              text="Structure"
              active={activeSection === "structure"}
              handleButton={() => handleButton("structure")}
            />
            <ButtonPageContent
              number=""
              text="Geology"
              active={activeSection === "geology"}
              handleButton={() => handleButton("geology")}
            />
          </div>
        )}
        {smallScreen.mobileSize && <span className={styles.divider}></span>}
        <div className={styles.images}>
          {planetImage && (
            <img
              src={planetImage}
              alt="planetImage"
              className={styles.planetImage}
            />
          )}
          <img
            src={image}
            alt="planetImage"
            className={` ${styles.planetImage} ${
              activeSection === "geology" && styles.geologyImage
            }`}
          />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.planetInfoContainer}>
          <h1 className={styles.planetName}>{name}</h1>
          <p className={styles.planetOverview}>{content}</p>
          <span className={styles.planetSource}>
            Source:{" "}
            <a
              className={styles.link}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
              <SourceIcon className={styles.icon} />
            </a>
          </span>
          <div className={styles.buttons}>
            <ButtonPageContent
              number="01"
              text="OVERVIEW"
              active={activeSection === "overview"}
              handleButton={() => handleButton("overview")}
            />
            <ButtonPageContent
              number="02"
              text="Internal Structure"
              active={activeSection === "structure"}
              handleButton={() => handleButton("structure")}
            />
            <ButtonPageContent
              number="03"
              text="Surface Geology"
              active={activeSection === "geology"}
              handleButton={() => handleButton("geology")}
            />
          </div>
        </div>
        <div className={styles.planetExtraInfoContainer}>
          <ExtraInfoPageContent title="ROTATION TIME" descr={rotation} />
          <ExtraInfoPageContent title="REVOLUTION TIME" descr={revolution} />
          <ExtraInfoPageContent title="RADIUS" descr={radius} />
          <ExtraInfoPageContent title="AVERAGE TEMP." descr={temperature} />
        </div>
      </div>
    </>
  );
};
