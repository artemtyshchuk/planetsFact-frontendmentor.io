import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { HeaderButton } from "./HeaderButton";
import { PLANETS_COLORS } from "planetsСolors";
import { HamburgerMenu } from "./HamburgerMenu";
import { ReactComponent as HamburgerIcon } from "assets/images/icon-hamburger.svg";

export const Header = () => {
  const { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } =
    PLANETS_COLORS;

  const [smallScreen, setSmallScreen] = useState({
    mobileSize: window.matchMedia("(max-width: 576px)").matches,
  });
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

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
    <div className={styles.header}>
      {isHamburgerMenuOpen && <HamburgerMenu />}
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>THE PLANETS</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <HeaderButton planeteName="Mercury" hoverColor={Mercury} />
          <HeaderButton planeteName="Venus" hoverColor={Venus} />
          <HeaderButton planeteName="Earth" hoverColor={Earth} />
          <HeaderButton planeteName="Mars" hoverColor={Mars} />
          <HeaderButton planeteName="Jupiter" hoverColor={Jupiter} />
          <HeaderButton planeteName="Saturn" hoverColor={Saturn} />
          <HeaderButton planeteName="Uranus" hoverColor={Uranus} />
          <HeaderButton planeteName="Neptune" hoverColor={Neptune} />
          {smallScreen.mobileSize && (
            <HamburgerIcon
              onClick={() => setIsHamburgerMenuOpen((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
      <span className={styles.divider}></span>
    </div>
  );
};
