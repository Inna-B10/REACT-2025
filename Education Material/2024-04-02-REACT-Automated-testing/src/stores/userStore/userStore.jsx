import { create } from "zustand";
import { bannedAliases } from "./bannedAliases";

export const useUserStore = create((set) => ({
  user: null,
  signin: (alias) => set(() => signinUser(alias)),
  signout: () => set(() => ({ user: null })),
}));

export const anonAlias = "Happy Person";

const regexNotAlphabet = /^[A-Za-zÀ-ȕ ]/;

/**
 * @param {string} alias
 * @returns
 */
function signinUser(alias) {
  if (!regexNotAlphabet.test(alias)) {
    return {
      user: null,
    };
  }

  if (bannedAliases.includes(alias)) {
    alias = anonAlias;
  }

  return {
    user: {
      name: alias,
    },
  };
}
