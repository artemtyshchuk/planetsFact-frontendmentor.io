import styles from "./PagesContent.module.scss";
import { ReactComponent as SourceIcon } from "assets/images/icon-source.svg";
import { ExtraInfoPageContent } from "./ExtraInfoPageContent";
import { useScreenSize } from "hooks/useScreenSize";
import { motion } from "framer-motion";
import { PLANETS_COLORS } from "planetsСolors";
import { ButtonGroup } from "./ButtonGroup";

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
  planet: keyof typeof PLANETS_COLORS;
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
  planet,
}: DynamicContentPagesContentProps) => {
  const { smallScreen } = useScreenSize();

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <>
      <motion.div
        className={styles.planetImageContainer}
        initial="initial"
        animate="animate"
      >
        {smallScreen.mobileSize && (
          <ButtonGroup
            activeSection={activeSection}
            handleButton={handleButton}
            planet={planet}
            isMobile={true}
          />
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
        <ButtonGroup
          activeSection={activeSection}
          handleButton={handleButton}
          planet={planet}
          isMobile={false}
        />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        className={styles.planetExtraInfoContainer}
      >
        <ExtraInfoPageContent title="ROTATION TIME" descr={rotation} />
        <ExtraInfoPageContent title="REVOLUTION TIME" descr={revolution} />
        <ExtraInfoPageContent title="RADIUS" descr={radius} />
        <ExtraInfoPageContent title="AVERAGE TEMP." descr={temperature} />
      </motion.div>
    </>
  );
};
