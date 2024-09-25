/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { PlanetsType } from "types";

export const useFetch = () => {
  const [data, setData] = useState<PlanetsType[]>([]);

  const location = useLocation();

  const planetName = location.pathname.replace("/", "").toLowerCase();

  const fetchData = async () => {
    try {
      const response = await fetch("data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const planets = (await response.json()) as PlanetsType[];

      const filtered = planets.filter((item) =>
        planetName === ""
          ? item.name.toLowerCase() === "mercury"
          : item.name.toLowerCase() === planetName
      );

      setData(filtered);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [planetName]);

  return { data };
};
