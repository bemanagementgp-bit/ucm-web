"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type HeaderTheme = "light" | "dark";

interface HeaderThemeValue {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderThemeContext = createContext<HeaderThemeValue>({
  theme: "light",
  setTheme: () => {},
});

/**
 * Comunica a la barra de navegación sobre qué tipo de fondo está apoyada.
 * Las páginas con un hero oscuro la ponen en modo `dark` mientras no hay
 * scroll, para que los enlaces se lean en blanco sobre la foto.
 */
export function HeaderThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<HeaderTheme>("light");
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <HeaderThemeContext.Provider value={value}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  return useContext(HeaderThemeContext).theme;
}

/**
 * Marcador que se coloca dentro de un hero oscuro. No renderiza nada: sólo
 * avisa del tema mientras esa página está montada, y lo restaura al salir.
 */
export function HeaderThemeSetter({ theme }: { theme: HeaderTheme }) {
  const { setTheme } = useContext(HeaderThemeContext);

  useEffect(() => {
    setTheme(theme);
    return () => setTheme("light");
  }, [theme, setTheme]);

  return null;
}
