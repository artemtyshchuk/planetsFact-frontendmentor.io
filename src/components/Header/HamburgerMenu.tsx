import { PLANETS_COLORS } from "planetsСolors";
import { HamburgerButton } from "./HamburgerButton";
import styles from "./Header.module.scss";
import { motion } from "framer-motion"; 

interface HamburgerMenuProps {
  closeMenu: () => void;
}

export const HamburgerMenu = ({ closeMenu }: HamburgerMenuProps) => {
  const { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } =
    PLANETS_COLORS;

  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.hamburgerMenu}
      data-testid="hamburgerMenu"
    >
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
    </motion.div>
  );
};
