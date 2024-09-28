import { useState } from "react";
import styles from "./Header.module.scss";
import { HeaderButton } from "./HeaderButton";
import { PLANETS_COLORS } from "planetsСolors";
import { HamburgerMenu } from "./HamburgerMenu";
import { ReactComponent as HamburgerIcon } from "assets/images/icon-hamburger.svg";
import { useScreenSize } from "hooks/useScreenSize";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } =
    PLANETS_COLORS;

  const { smallScreen } = useScreenSize();

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <AnimatePresence>
        {isHamburgerMenuOpen && (
          <div key="hamburgerMenu">
            <HamburgerMenu closeMenu={() => setIsHamburgerMenuOpen(false)} />
          </div>
        )}
      </AnimatePresence>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>THE PLANETS</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <HeaderButton planetName="Mercury" hoverColor={Mercury} />
          <HeaderButton planetName="Venus" hoverColor={Venus} />
          <HeaderButton planetName="Earth" hoverColor={Earth} />
          <HeaderButton planetName="Mars" hoverColor={Mars} />
          <HeaderButton planetName="Jupiter" hoverColor={Jupiter} />
          <HeaderButton planetName="Saturn" hoverColor={Saturn} />
          <HeaderButton planetName="Uranus" hoverColor={Uranus} />
          <HeaderButton planetName="Neptune" hoverColor={Neptune} />
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
