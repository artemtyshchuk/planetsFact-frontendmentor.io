import { useState } from "react";
import styles from "./PagesContent.module.scss";
import { DynamicContentPagesContent } from "./DynamicContentPagesContent";
import { useFetch } from "hooks/useFetch";

export const PagesContent = () => {
  const { data } = useFetch();
  const [activeSection, setActiveSection] = useState<
    "overview" | "structure" | "geology"
  >("overview");

  return (
    <div className={styles.pageGlobalContent}>
      {data.length > 0 &&
        data.map((planet) => (
          <div key={planet.name} className={styles.pageContent}>
            {activeSection === "overview" && (
              <DynamicContentPagesContent
                image={planet.images.planet}
                name={planet.name}
                content={planet.overview.content}
                source={planet.overview.source}
                rotation={planet.rotation}
                revolution={planet.revolution}
                radius={planet.radius}
                temperature={planet.temperature}
                handleButton={(section) => setActiveSection(section)}
                activeSection={activeSection}
              />
            )}
            {activeSection === "structure" && (
              <DynamicContentPagesContent
                image={planet.images.internal}
                name={planet.name}
                content={planet.structure.content}
                source={planet.structure.source}
                rotation={planet.rotation}
                revolution={planet.revolution}
                radius={planet.radius}
                temperature={planet.temperature}
                handleButton={(section) => setActiveSection(section)}
                activeSection={activeSection}
              />
            )}
            {activeSection === "geology" && (
              <DynamicContentPagesContent
                planetImage={planet.images.planet}
                image={planet.images.geology}
                name={planet.name}
                content={planet.geology.content}
                source={planet.geology.source}
                rotation={planet.rotation}
                revolution={planet.revolution}
                radius={planet.radius}
                temperature={planet.temperature}
                handleButton={(section) => setActiveSection(section)}
                activeSection={activeSection}
              />
            )}
          </div>
        ))}
    </div>
  );
};
