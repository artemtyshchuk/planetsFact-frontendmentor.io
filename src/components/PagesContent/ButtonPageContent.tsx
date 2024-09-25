import styles from "./PagesContent.module.scss";

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
  return (
    <>
      <button
        className={styles.button}
        style={{ backgroundColor: active ? "#419EBB" : "transparent" }}
        onClick={() => handleButton()}
      >
        <span className={styles.number}>{number}</span>
        {text}
      </button>
    </>
  );
};
