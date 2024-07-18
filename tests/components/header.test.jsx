import { beforeEach, describe, expect, it, vitest } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../components/header";
import { useRouter } from "next/navigation";

vitest.mock("next/navigation", () => ({
  useRouter: vitest.fn(),
}));

describe("Header component", function () {
  const mockPush = vitest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });
  });

  it("navigates to correct page on click", () => {
    render(<Header />);
    const aboutLink = screen.getByText("[About]");
    fireEvent.click(aboutLink);
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
