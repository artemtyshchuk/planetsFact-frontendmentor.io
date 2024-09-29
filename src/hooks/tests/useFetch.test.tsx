/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import { useFetch } from "../useFetch";
import { useLocation } from "react-router";

jest.mock("react-router", () => ({
  useLocation: jest.fn(),
}));

const TestComponent = () => {
  const { data } = useFetch();
  return (
    <div>
      {data.map((planet) => (
        <div key={planet.name}>
          <h1>{planet.name}</h1>
          <p>{planet.overview.content}</p>
        </div>
      ))}
    </div>
  );
};

describe("useFetch hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and displays planet data", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/earth",
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve([
            {
              name: "Earth",
              overview: {
                content: "Earth is the third planet from the Sun.",
              },
            },
          ]),
      } as unknown as Response)
    );

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText("Earth")).toBeInTheDocument();
      expect(
        screen.getByText("Earth is the third planet from the Sun.")
      ).toBeInTheDocument();
    });
  });

  it("should handle network error gracefully", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/earth",
    });

    global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.queryByText("Earth")).not.toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith("data.json");
  });

  it("should handle non-ok response", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/earth",
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      } as Response)
    );

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.queryByText("Earth")).not.toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith("data.json");
  });

  it("should filter planets correctly when pathname is empty (shows Mercury)", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/",
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve([
            {
              name: "Mercury",
              overview: {
                content: "Mercury is the closest planet to the Sun.",
              },
            },
            {
              name: "Earth",
              overview: { content: "Earth is the third planet from the Sun." },
            },
          ]),
      } as Response)
    );

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText("Mercury")).toBeInTheDocument();
      expect(screen.queryByText("Earth")).not.toBeInTheDocument();
    });
  });

  it("should filter planets correctly when pathname matches a planet (Earth)", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/earth",
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve([
            {
              name: "Mercury",
              overview: {
                content: "Mercury is the closest planet to the Sun.",
              },
            },
            {
              name: "Earth",
              overview: { content: "Earth is the third planet from the Sun." },
            },
          ]),
      } as Response)
    );

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText("Earth")).toBeInTheDocument();
      expect(screen.queryByText("Mercury")).not.toBeInTheDocument();
    });
  });

  it("should filter planets correctly when pathname does not match any planet", async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/unknown",
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve([
            {
              name: "Mercury",
              overview: {
                content: "Mercury is the closest planet to the Sun.",
              },
            },
            {
              name: "Earth",
              overview: { content: "Earth is the third planet from the Sun." },
            },
          ]),
      } as Response)
    );

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.queryByText("Earth")).not.toBeInTheDocument();
      expect(screen.queryByText("Mercury")).not.toBeInTheDocument();
    });
  });
});
