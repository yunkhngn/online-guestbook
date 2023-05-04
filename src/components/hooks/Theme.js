import React from "react";

import {
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ThemeButton from "./ThemeButton";

const Theme = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [modeTheme, setMode] = React.useState(prefersDarkMode);
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: modeTheme ? 'dark' : 'light',
            backgroundColor: {
              default: modeTheme ? 'dark' : 'white',
            },
          },
        }),
      [modeTheme],
    );
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeButton setMode={setMode} modeTheme={modeTheme}/>
        <div className="App">{children}</div>
    </ThemeProvider>
  );
};

export default Theme;
