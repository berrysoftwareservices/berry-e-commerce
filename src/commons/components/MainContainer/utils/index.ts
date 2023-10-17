import { LOCAL_STORAGE } from '../../../constants/localstorage.constants';

export const clearPersistedSettings = () =>
  Object.values(LOCAL_STORAGE).forEach((itemToRemove) => localStorage.removeItem(itemToRemove));
