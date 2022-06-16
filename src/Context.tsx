import { createContext } from 'react';

export const themeContext = createContext ({
    light: false,
    setLight: (light: boolean) => {}
});