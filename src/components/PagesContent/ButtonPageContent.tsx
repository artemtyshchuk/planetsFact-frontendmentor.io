import { useScreenSize } from "hooks/useScreenSize";
import styles from "./PagesContent.module.scss";

interface ButtonPageContentProps {
  number: string;
  text: string;
  active: boolean;
  handleButton: () => void;
}

export const ButtonPageContent = ({
  number,
  text,
  active,
  handleButton,
}: ButtonPageContentProps) => {
  const { smallScreen } = useScreenSize();

  const buttonStyle = smallScreen.mobileSize
    ? {
        backgroundColor: "transparent",
        borderBottom: active ? "4px solid #419EBB" : "none",
      }
    : {
        backgroundColor: active ? "#419EBB" : "transparent",
      };

  return (
    <>
      <button
        className={styles.button}
        style={buttonStyle}
        onClick={() => handleButton()}
      >
        <span>{number}</span>
        {text}
      </button>
    </>
  );
};
