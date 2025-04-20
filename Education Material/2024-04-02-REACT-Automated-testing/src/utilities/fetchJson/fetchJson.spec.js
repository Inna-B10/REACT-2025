import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchJson, errorCause } from "./fetchJson";

const mockUrl = "https://example.com";

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

describe("fetchJson", async (test) => {
  // Mocking fetch function

  it("Successful fetch", async () => {
    // Arrange
    // Mocking successful fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ key: "value" }),
    });

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Asset
    expect(data).toEqual({ key: "value" });
    expect(error).toBeNull();
  });

  test("Client error", async () => {
    // Arrange
    // Mocking client error (status 404)
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Assert
    expect(data).toBeNull();
    expect(error).toBe(errorCause.client);
  });

  test("Backend error", async () => {
    // Arrange
    // Mocking server error (status 500)
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Assert
    expect(data).toBeNull();
    expect(error).toBe(errorCause.backend);
  });

  test("Unknown error", async () => {
    // Arrange
    // Mocking unknown error (status 700)
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 700,
    });

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Assert
    expect(data).toBeNull();
    expect(error).toBe(errorCause.unknown);
  });

  test("Connection error", async () => {
    // Arrange
    // Mocking network error
    fetch.mockRejectedValueOnce(new Error("Failed to connect"));

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Assert
    expect(data).toBeNull();
    expect(error).toBe(errorCause.connection);
  });

  test("Corrupted data error", async () => {
    // Arrange
    // Mocking response with invalid JSON
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    });

    // Act
    const { data, error } = await fetchJson(mockUrl);

    // Assert
    expect(data).toBeNull();
    expect(error).toBe(errorCause.corrupted);
  });
});
