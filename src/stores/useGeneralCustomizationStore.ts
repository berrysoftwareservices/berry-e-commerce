//Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * useGeneralCustomizationStore: Hook to share the general information of the project
 */

interface generalCustomization {
  // isOpen: string[],
  // defaultId: string,
  fontFamily: string;
  borderRadius: number;
  opened: boolean;
  setFontFamily: (value: string) => void;
  setBorderRadius: (value: number) => void;
  setOpened: (value: boolean) => void;
}

export const useGeneralCustomizationStore = create<generalCustomization>()(
  persist(
    (set) => ({
      // isOpen: [],
      // defaultId: 'default',
      fontFamily: `'Inter', sans-serif`,
      borderRadius: 12,
      opened: true,
      setFontFamily: (fontFamily) => set((state) => ({ ...state, fontFamily: fontFamily })),
      setBorderRadius: (borderRadius) => set((state) => ({ ...state, borderRadius: borderRadius })),
      setOpened: (opened) => set((state) => ({ ...state, opened: opened })),
    }),
    {
      name: 'general-customization',
    },
  ),
);
