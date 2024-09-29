import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PagesContent } from "./PagesContent";
import { useFetch } from "hooks/useFetch";
import { BrowserRouter } from "react-router-dom";

jest.mock("hooks/useFetch");

const mockData = [
  {
    name: "Earth",
    images: {
      planet: "path/to/planet-image.png",
      internal: "path/to/internal-image.png",
      geology: "path/to/geology-image.png",
    },
    overview: {
      content: "Earth is the third planet from the Sun.",
      source: "https://wikipedia.org/Earth",
    },
    structure: {
      content: "Earth's structure includes the crust, mantle, and core.",
      source: "https://wikipedia.org/Earth_structure",
    },
    geology: {
      content: "Earth has a variety of geological features.",
      source: "https://wikipedia.org/Earth_geology",
    },
    rotation: "24 hours",
    revolution: "365 days",
    radius: "6,371 km",
    temperature: "15 °C",
  },
];

const mockMatchMedia = (matches: boolean) =>
  jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

describe("PagesContent", () => {
  beforeEach(() => {
    window.matchMedia = mockMatchMedia(false);
    (useFetch as jest.Mock).mockReturnValue({ data: mockData });
  });

  const renderWithRouter = (ui: ReactNode) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it("should render planet data correctly", () => {
    renderWithRouter(<PagesContent />);

    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(
      screen.getByText("Earth is the third planet from the Sun.")
    ).toBeInTheDocument();
    expect(screen.getByText("24 hours")).toBeInTheDocument();
    expect(screen.getByText("365 days")).toBeInTheDocument();
    expect(screen.getByText("6,371 km")).toBeInTheDocument();
    expect(screen.getByText("15 °C")).toBeInTheDocument();
  });

  it("should switch to structure section", () => {
    renderWithRouter(<PagesContent />);

    fireEvent.click(screen.getByText("Internal Structure"));

    expect(
      screen.getByText(
        "Earth's structure includes the crust, mantle, and core."
      )
    ).toBeInTheDocument();
  });

  it("should switch to geology section", () => {
    renderWithRouter(<PagesContent />);

    fireEvent.click(screen.getByText("Surface Geology"));

    expect(
      screen.getByText("Earth has a variety of geological features.")
    ).toBeInTheDocument();
  });

  it("should display mobile buttons", () => {
    window.matchMedia = mockMatchMedia(true);

    renderWithRouter(<PagesContent />);

    expect(screen.getAllByRole("button", { name: "OVERVIEW" })).toHaveLength(1);
    expect(screen.getAllByRole("button", { name: "Structure" })).toHaveLength(
      1
    );
    expect(screen.getAllByRole("button", { name: "Geology" })).toHaveLength(1);
  });
  it("should handleButton switch between sections correctly", () => {
    renderWithRouter(<PagesContent />);

    expect(
      screen.getByText("Earth is the third planet from the Sun.")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Internal Structure"));

    expect(
      screen.getByText(
        "Earth's structure includes the crust, mantle, and core."
      )
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Surface Geology"));

    expect(
      screen.getByText("Earth has a variety of geological features.")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("OVERVIEW"));

    expect(
      screen.getByText("Earth is the third planet from the Sun.")
    ).toBeInTheDocument();
  });
  it("should handleButton switch between sections correctly on mobile devices", () => {
    window.matchMedia = mockMatchMedia(true);

    renderWithRouter(<PagesContent />);

    expect(
      screen.getByText("Earth is the third planet from the Sun.")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Structure" }));

    expect(
      screen.getByText(
        "Earth's structure includes the crust, mantle, and core."
      )
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Geology"));

    expect(
      screen.getByText("Earth has a variety of geological features.")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "OVERVIEW" }));

    expect(
      screen.getByText("Earth is the third planet from the Sun.")
    ).toBeInTheDocument();
  });
});
