import { useTheme } from "next-themes";
import { FunctionComponent, useEffect, useState } from "react";
import style from "./ThemeChanger.module.scss";

interface ThemeChangerProps {}

const ThemeChanger: FunctionComponent<ThemeChangerProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const changeThemeTo = theme == "dark" ? "light" : "dark";

  return (
    <div
      className={ `${style.toggle} ${theme == 'dark'? style.dark :''}`  }
      onClick={() => setTheme(changeThemeTo)}
    >
      <span></span>
    </div>
  );
};

export default ThemeChanger;
