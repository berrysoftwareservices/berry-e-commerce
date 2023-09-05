//Zustand
import { create } from 'zustand';

interface generalSettings {
  openNotificationSettings: boolean;
  openProfileSettings: boolean;
  setOpenNotificationSettings: (value: boolean) => void;
  setOpenProfileSettings: (value: boolean) => void;
}

export const useGeneralSettingsStore = create<generalSettings>()((set) => ({
  openNotificationSettings: false,
  openProfileSettings: false,
  setOpenNotificationSettings: (openNotificationSettings) =>
    set((state) => ({
      ...state,
      openNotificationSettings: openNotificationSettings,
    })),
  setOpenProfileSettings: (openProfileSettings) =>
    set((state) => ({
      ...state,
      openProfileSettings: openProfileSettings,
    })),
}));
