import styles from "./PagesContent.module.scss";

interface ExtraInfoPageContentProps {
  title: string;
  descr: string;
}

export const ExtraInfoPageContent = ({
  title,
  descr,
}: ExtraInfoPageContentProps) => {
  return (
    <div className={styles.extraInfoContainer}>
      <p className={styles.extraInfoTitle}>{title}</p>
      <p className={styles.extraInfoDescr}>{descr}</p>
    </div>
  );
};
