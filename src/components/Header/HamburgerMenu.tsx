import { PLANETS_COLORS } from "planetsСolors";
import { HamburgerButton } from "./HamburgerButton";
import styles from "./Header.module.scss";

export const HamburgerMenu = () => {
  const { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } =
    PLANETS_COLORS;
  return (
    <div className={styles.hamburgerMenu}>
      <HamburgerButton planetName="Mercury" color={Mercury} uderline={true} />
      <HamburgerButton planetName="Venus" color={Venus} uderline={true} />
      <HamburgerButton planetName="Earth" color={Earth} uderline={true} />
      <HamburgerButton planetName="Mars" color={Mars} uderline={true} />
      <HamburgerButton planetName="Jupiter" color={Jupiter} uderline={true} />
      <HamburgerButton planetName="Saturn" color={Saturn} uderline={true} />
      <HamburgerButton planetName="Uranus" color={Uranus} uderline={true} />
      <HamburgerButton planetName="Neptune" color={Neptune} uderline={false} />
    </div>
  );
};
