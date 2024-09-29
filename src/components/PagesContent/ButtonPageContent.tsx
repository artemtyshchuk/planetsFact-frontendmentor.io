import { useScreenSize } from "hooks/useScreenSize";
import styles from "./PagesContent.module.scss";
import { PLANETS_COLORS } from "planetsСolors";

interface ButtonPageContentProps {
  number: string;
  text: string;
  active: boolean;
  handleButton: () => void;
  planet: keyof typeof PLANETS_COLORS;
}

export const ButtonPageContent = ({
  number,
  text,
  active,
  handleButton,
  planet,
}: ButtonPageContentProps) => {
  const { smallScreen } = useScreenSize();

  const buttonStyle = smallScreen.mobileSize
    ? {
        backgroundColor: "transparent",
        borderBottom: active ? `4px solid ${PLANETS_COLORS[planet]}` : "none",
      }
    : {
        backgroundColor: active ? PLANETS_COLORS[planet] : "transparent",
      };

  return (
    <>
      <button
        className={styles.button}
        style={buttonStyle}
        onClick={() => handleButton()}
      >
        <span className={styles.number}>{number}</span>
        {text}
      </button>
    </>
  );
};
