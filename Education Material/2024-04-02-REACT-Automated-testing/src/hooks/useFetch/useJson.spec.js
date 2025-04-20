import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useJson } from "./useJson";
import { fetchJson } from "../../utilities/fetchJson/fetchJson";

// Mock fetchJson function
vi.mock("../../utilities/fetchJson/fetchJson");

describe("useJson", () => {
  const mockData = { foo: "bar" };
  const mockError = new Error("Failed to fetch");

  beforeEach(() => {
    fetchJson.mockClear();
  });

  it("should initialize with isLoading as true", () => {
    // Arrange
    fetchJson.mockResolvedValueOnce({
      data: mockData,
      error: null,
    });

    const { result } = renderHook(() => useJson("mock-url"));

    // Assert
    expect(result.current.isLoading).toBe(true);
  });

  it("should set isLoading to false and populate data after successful fetch", async () => {
    // Arrange
    fetchJson.mockResolvedValueOnce({ data: mockData, error: null });

    const { result, rerender } = renderHook(() => useJson("mock-url"));

    // Act
    rerender();

    // Assert
    waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(mockData);
    });
  });

  it("should populate error if fetch fails", async () => {
    // Arrange
    fetchJson.mockResolvedValueOnce({ data: null, error: mockError });

    const { result, rerender } = renderHook(() => useJson("mock-url"));

    // Act
    rerender();

    // Assert
    waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(mockData);
    });
  });

  it("should not refetch if url remains the same", async () => {
    // Arrange
    fetchJson.mockResolvedValueOnce({ data: mockData, error: null });

    const { rerender } = renderHook(({ url }) => useJson(url), {
      initialProps: { url: "mock-url" },
    });

    // Act
    rerender({ url: "mock-url" });

    // Assert
    expect(fetchJson).toHaveBeenCalledTimes(1);
  });

  it("should refetch if url is different", async () => {
    // Arrange
    fetchJson.mockResolvedValue({ data: mockData, error: null });

    const { rerender } = renderHook(({ url }) => useJson(url), {
      initialProps: { url: "mock-url" },
    });

    // Act
    rerender({ url: "mock-url" });
    rerender({ url: "mock-url-2" });

    // Assert
    expect(fetchJson).toHaveBeenCalledTimes(2);
  });
});
