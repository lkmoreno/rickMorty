import { useState, useRef, useCallback } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "./utils/theme";

function App() {
  const [search, setSearch] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const searchInput = useRef(null);
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header
          toggleTheme={toggleTheme}
          search={search}
          handleSearch={handleSearch}
          searchInput={searchInput}
          isDarkTheme={isDarkTheme}
        />
        <Characters search={search} />
      </ThemeProvider>
    </>
  );
}

export default App;
