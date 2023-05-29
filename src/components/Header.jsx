import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import Search from "./Search";

const Header = ({ search, handleSearch, searchInput,toggleTheme,isDarkTheme }) => {
  // const [darkMode, setDarkMode] = useState(false);
  // const color = useContext(ThemeContext);
  // const classes = useStyles();

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    //   <div className="">
    <Box position='static' >
    <AppBar position="static"  >
        <Toolbar disableGutters  sx={{justifyContent:'space-around'}}>
          <img height={60} width={220} src="src/assets/logoRickMorty.png" />
          <Button onClick={toggleTheme} type="button"  color="secondary"   >
            {isDarkTheme ? "Dark Mode" : "Ligth Mode"}
          </Button>
          <Search
            search={search}
            searchInput={searchInput}
            handleSearch={handleSearch}
          />
        </Toolbar>
    </AppBar>
    </Box>
    // </div>
  );
  // <div className="Header">
  //   <h1 style={{color}}>Rick and Morty</h1>
  //   <button onClick={handleClick} type="button">
  //     {darkMode ? 'Dark Mode': 'Ligth Mode'}
  //   </button>
  // </div>
};

export default Header;
