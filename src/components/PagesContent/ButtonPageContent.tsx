import styles from "./PagesContent.module.scss";
import { useEffect, useState } from "react";

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
