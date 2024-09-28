import { useState } from "react";
import styles from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router";

interface HeaderButtonProps {
  planetName: string;
  hoverColor: string;
}

export const HeaderButton = ({ planetName, hoverColor }: HeaderButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    location.pathname === `/${planetName.toLowerCase()}` ||
    (planetName.toLowerCase() === "mercury" && location.pathname === "/");

  return (
    <div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderTop:
            isActive || isHovered
              ? `4px solid ${hoverColor}`
              : "4px solid transparent",
        }}
        className={styles.button}
        onClick={() =>
          navigate(
            `/${
              planetName.toLowerCase() === "mercury"
                ? ""
                : planetName.toLowerCase()
            }`
          )
        }
      >
        {planetName}
      </button>
    </div>
  );
};
