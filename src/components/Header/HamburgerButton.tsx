import { useNavigate } from "react-router";
import styles from "./Header.module.scss";
import { ReactComponent as RightChevron } from "assets/images/icon-chevron.svg";

interface HamburgerButtonProps {
  color: string;
  planetName: string;
  uderline: boolean;
  closeMenu: () => void;
}

export const HamburgerButton = ({
  color,
  planetName,
  uderline,
  closeMenu,
}: HamburgerButtonProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(
      `/${
        planetName.toLowerCase() === "mercury" ? "" : planetName.toLowerCase()
      }`
    );
    closeMenu();
  };

  return (
    <div className={styles.hamburgerContent}>
      <div className={styles.hamburgerButtons} onClick={handleClose}>
        <span
          className={styles.circle}
          style={{ backgroundColor: `${color}` }}
        ></span>
        <p className={styles.planetName}>{planetName}</p>
        <div className={styles.chevron}>
          <RightChevron />
        </div>
      </div>
      {uderline && <div className={styles.underline}></div>}
    </div>
  );
};
