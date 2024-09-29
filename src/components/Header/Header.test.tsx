import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { HeaderButton } from "./HeaderButton";
import { HamburgerButton } from "./HamburgerButton";

const mockMatchMedia = (matches: boolean) =>
  jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

describe("Header", () => {
  beforeEach(() => {
    window.matchMedia = mockMatchMedia(false);
  });

  const planetName = "Mercury";
  const hoverColor = "#ffcc00";
  const closeMenu = jest.fn();

  const renderWithRouter = (ui: ReactNode) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };
  it("should render Header with logo and buttons", () => {
    renderWithRouter(<Header />);

    expect(screen.getByText("THE PLANETS")).toBeInTheDocument();
    expect(screen.getByText("THE PLANETS")).toHaveClass("title");

    expect(screen.getByText("Mercury")).toBeInTheDocument();
    expect(screen.getByText("Venus")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Mars")).toBeInTheDocument();
    expect(screen.getByText("Jupiter")).toBeInTheDocument();
    expect(screen.getByText("Saturn")).toBeInTheDocument();
    expect(screen.getByText("Uranus")).toBeInTheDocument();
    expect(screen.getByText("Neptune")).toBeInTheDocument();
  });
  it('should render HamburgerMenu if "mobileSize" is true', () => {
    window.matchMedia = mockMatchMedia(true);
    renderWithRouter(<Header />);

    fireEvent.click(screen.getByTestId("hamburgerIcon"));

    const hamburgerButtons = screen.getAllByTestId("hamburgerButton");
    expect(hamburgerButtons).toHaveLength(8);

    fireEvent.click(screen.getByTestId("hamburgerIcon"));
    expect(screen.queryByTestId("hamburgerButtons")).toBeNull();
  });
  it("should not render HamburgerMenu if mobileSize is false", () => {
    window.matchMedia = mockMatchMedia(false);
    renderWithRouter(<Header />);

    expect(screen.queryByTestId("hamburgerButtons")).toBeNull();
  });
  it("should navigate when clicking buttons", () => {
    renderWithRouter(<Header />);

    fireEvent.click(screen.getByText("Mercury"));
    expect(window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText("Venus"));
    expect(window.location.pathname).toBe("/venus");

    fireEvent.click(screen.getByText("Earth"));
    expect(window.location.pathname).toBe("/earth");

    fireEvent.click(screen.getByText("Mars"));
    expect(window.location.pathname).toBe("/mars");

    fireEvent.click(screen.getByText("Jupiter"));
    expect(window.location.pathname).toBe("/jupiter");

    fireEvent.click(screen.getByText("Saturn"));
    expect(window.location.pathname).toBe("/saturn");

    fireEvent.click(screen.getByText("Uranus"));
    expect(window.location.pathname).toBe("/uranus");

    fireEvent.click(screen.getByText("Neptune"));
    expect(window.location.pathname).toBe("/neptune");
  });
  it("should change border color on hover", () => {
    renderWithRouter(
      <HeaderButton planetName={planetName} hoverColor={hoverColor} />
    );

    const button = screen.getByText(planetName);
    expect(button).toHaveStyle("border-top: 4px solid transparent");

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle(`border-top: 4px solid ${hoverColor}`);

    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle("border-top: 4px solid transparent");
  });
  it("should have active border color when active", () => {
    Object.defineProperty(window, "location", {
      value: { pathname: "/" },
      writable: true,
    });

    renderWithRouter(
      <HeaderButton planetName={planetName} hoverColor={hoverColor} />
    );

    const button = screen.getByText(planetName);

    expect(button).toHaveStyle(`border-top: 4px solid ${hoverColor}`);
  });
  it("should navigate and close menu when button is clicked", () => {
    renderWithRouter(
      <HamburgerButton
        color={hoverColor}
        planetName={planetName}
        uderline={false}
        closeMenu={closeMenu}
      />
    );

    fireEvent.click(screen.getByTestId("hamburgerButton"));
    expect(window.location.pathname).toBe("/");
    expect(closeMenu).toHaveBeenCalled();
  });
});
