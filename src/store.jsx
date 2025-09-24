import { create } from "zustand";

const useApp = create((set) => ({
  currentNavTab: "Agriculture",
  selectedCategory: "",
  setCurrentNavTab: (tab) => set({ currentNavTab: tab }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useApp;
