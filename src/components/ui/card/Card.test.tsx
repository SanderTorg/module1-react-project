import "@testing-library/jest-dom";
import Card from "./Card";
import { screen, render } from "@testing-library/react";

describe("Card component", async () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <p>Hello world</p>
      </Card>,
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Card title="My Card Title">Content</Card>);
    expect(screen.getByText("My Card Title")).toBeInTheDocument();
  });
});
