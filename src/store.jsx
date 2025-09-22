import { create } from "zustand";

const useApp = create((set) => ({
  currentNavTab: "Agriculture",
  setCurrentNavTab: (tab) => set({ currentNavTab: tab }),
}));

export default useApp;
