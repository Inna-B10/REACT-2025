import { describe, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { pageSpecification } from "../../tests/specifications/pageSpecification";
import { MemoryRouter } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

afterEach(cleanup);

const PageContext = () => (
  <MemoryRouter>
    <NotFoundPage />
  </MemoryRouter>
);

describe("NotFoundPage", () => {
  pageSpecification(PageContext);
});
