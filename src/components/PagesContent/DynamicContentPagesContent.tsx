import styles from "./PagesContent.module.scss";
import { ReactComponent as SourceIcon } from "assets/images/icon-source.svg";
import { ButtonPageContent } from "./ButtonPageContent";
import { ExtraInfoPageContent } from "./ExtraInfoPageContent";
import { useScreenSize } from "hooks/useScreenSize";
import { motion } from "framer-motion";

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

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

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
  const { smallScreen } = useScreenSize();

  return (
    <>
      <motion.div
        className={styles.planetImageContainer}
        initial="initial"
        animate="animate"
      >
        {smallScreen.mobileSize && (
          <motion.div className={styles.buttons_mobile}>
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
          </motion.div>
        )}
        {smallScreen.mobileSize && <span className={styles.divider}></span>}
        <div className={styles.images}>
          {planetImage && (
            <motion.img
              src={planetImage}
              alt="planetImage"
              className={styles.planetImage}
              variants={imageVariants}
              initial="initial"
              animate="animate"
            />
          )}
          <motion.img
            src={image}
            alt="planetImage"
            className={` ${styles.planetImage} ${
              activeSection === "geology" && styles.geologyImage
            }`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.planetInfoContainer}
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
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
      </motion.div>
      <div className={styles.planetExtraInfoContainer}>
        <ExtraInfoPageContent title="ROTATION TIME" descr={rotation} />
        <ExtraInfoPageContent title="REVOLUTION TIME" descr={revolution} />
        <ExtraInfoPageContent title="RADIUS" descr={radius} />
        <ExtraInfoPageContent title="AVERAGE TEMP." descr={temperature} />
      </div>
    </>
  );
};
