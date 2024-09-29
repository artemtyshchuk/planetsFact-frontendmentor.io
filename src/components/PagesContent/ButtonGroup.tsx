import styles from "./PagesContent.module.scss";
import { ButtonPageContent } from "./ButtonPageContent";
import { PLANETS_COLORS } from "planetsСolors";

interface ButtonGroupProps {
  activeSection: "overview" | "structure" | "geology";
  handleButton: (section: "overview" | "structure" | "geology") => void;
  planet: keyof typeof PLANETS_COLORS;
  isMobile: boolean;
}

export const ButtonGroup = ({
  activeSection,
  handleButton,
  planet,
  isMobile,
}: ButtonGroupProps) => (
  <div className={isMobile ? styles.buttons_mobile : styles.buttons}>
    <ButtonPageContent
      number={isMobile ? "" : "01"}
      text="OVERVIEW"
      active={activeSection === "overview"}
      handleButton={() => handleButton("overview")}
      planet={planet}
    />
    <ButtonPageContent
      number={isMobile ? "" : "02"}
      text={isMobile ? "Structure" : "Internal Structure"}
      active={activeSection === "structure"}
      handleButton={() => handleButton("structure")}
      planet={planet}
    />
    <ButtonPageContent
      number={isMobile ? "" : "03"}
      text={isMobile ? "Geology" : "Surface Geology"}
      active={activeSection === "geology"}
      handleButton={() => handleButton("geology")}
      planet={planet}
    />
  </div>
);
