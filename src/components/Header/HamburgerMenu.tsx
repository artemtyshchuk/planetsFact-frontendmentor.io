import { PLANETS_COLORS } from "planetsСolors";
import { HamburgerButton } from "./HamburgerButton";
import styles from "./Header.module.scss";

interface HamburgerMenuProps {
  closeMenu: () => void;
}

export const HamburgerMenu = ({ closeMenu }: HamburgerMenuProps) => {
  const { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } =
    PLANETS_COLORS;
  return (
    <div className={styles.hamburgerMenu}>
      <HamburgerButton
        planetName="Mercury"
        color={Mercury}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Venus"
        color={Venus}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Earth"
        color={Earth}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Mars"
        color={Mars}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Jupiter"
        color={Jupiter}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Saturn"
        color={Saturn}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Uranus"
        color={Uranus}
        uderline={true}
        closeMenu={closeMenu}
      />
      <HamburgerButton
        planetName="Neptune"
        color={Neptune}
        uderline={false}
        closeMenu={closeMenu}
      />
    </div>
  );
};
