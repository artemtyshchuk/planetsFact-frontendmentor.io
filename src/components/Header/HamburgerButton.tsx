import styles from "./Header.module.scss";
import { ReactComponent as RightChevron } from "assets/images/icon-chevron.svg";

interface HamburgerButtonProps {
  color: string;
  planetName: string;
  uderline: boolean;
}

export const HamburgerButton = ({
  color,
  planetName,
  uderline,
}: HamburgerButtonProps) => {
  return (
    <div className={styles.hamburgerContent}>
      <div className={styles.hamburgerButtons}>
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
