import { describe, it, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useUserStore } from "./userStore";
import { bannedAliases } from "./bannedAliases";
import { anonAlias } from "./userStore";

describe("useUserStore", () => {
  it("should initialize with the user to null", () => {
    // Arrange
    const { result } = renderHook(() => useUserStore());

    // Act

    // Assert
    expect(result.current.user).toBe(null);
  });

  describe("should correctly handle signing in with a ", () => {
    it("normal alias", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());
      const alias = "john";

      // Act
      act(() => {
        result.current.signin(alias);
      });

      // Assert
      expect(result.current.user.name).toBe(alias);
    });

    it("space seperated alias", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());
      const alias = "john doe";

      // Act
      act(() => {
        result.current.signin(alias);
      });

      // Assert
      expect(result.current.user.name).toBe(alias);
    });
  });

  describe("should reject signin attempts with", () => {
    it("aliases containing special characters", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());
      const alias = "£$£@";

      // Act
      act(() => {
        result.current.signin(alias);
      });

      // Assert
      expect(result.current.user).toBe(null);
    });
  });

  describe("should replace the name with a premade when", () => {
    it("alias is on bannedAliases list", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());
      const alias = bannedAliases[0];

      // Act
      act(() => {
        result.current.signin(alias);
      });

      // Assert
      expect(result.current.user.name).toBe(anonAlias);
    });
  });

  describe("should return the user value to null when signing out and", () => {
    it("no user is signed in", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());

      // Act
      act(() => {
        result.current.signout();
      });

      // Assert
      expect(result.current.user).toBe(null);
    });

    it("a user is signed in", () => {
      // Arrange
      const { result } = renderHook(() => useUserStore());
      const alias = "john";

      // Act
      act(() => {
        result.current.signin(alias);
      });

      act(() => {
        result.current.signout();
      });

      // Assert
      expect(result.current.user).toBe(null);
    });
  });

  it("should work across multiple user sign in and sign outs", () => {
    // Arrange
    const { result } = renderHook(() => useUserStore());
    const alias = "john";

    // Act
    act(() => {
      result.current.signin(alias);
    });

    act(() => {
      result.current.signout();
    });

    act(() => {
      result.current.signin(alias);
    });

    // Assert
    expect(result.current.user.name).toBe(alias);
  });
});
