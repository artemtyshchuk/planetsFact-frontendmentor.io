import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("should render Container", () => {
    render(
      <Container>
        <h1>Test</h1>
      </Container>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
