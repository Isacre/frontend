import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/extend-expect";
import Kanbam from "./index";

function KanbamInsideProvider() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Kanbam />
    </QueryClientProvider>
  );
}

describe("Kanbam", () => {
  it("should render properly", () => {
    const { container } = render(<KanbamInsideProvider />);
    expect(container).toBeInTheDocument();
  });
});
