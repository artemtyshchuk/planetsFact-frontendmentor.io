import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

interface HeaderButtonProps {
  planeteName: string;
  hoverColor: string;
}

export const HeaderButton = ({
  planeteName,
  hoverColor,
}: HeaderButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [smallScreen, setSmallScreen] = useState({
    smallsize: window.matchMedia("(max-width: 576px)").matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen({
        smallsize: window.matchMedia("(max-width: 576px)").matches,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderTop: isHovered
            ? `4px solid ${hoverColor}`
            : "4px solid transparent",
        }}
        className={styles.button}
      >
        {planeteName}
      </button>
    </div>
  );
};
