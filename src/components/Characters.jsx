import { useState, useReducer, useMemo, useRef, useCallback } from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";
import Card from "@mui/material/Card";
 
import { Grid, Typography, Box } from "@mui/material";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = ({search}) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };


  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

 

  return (
    <Box sx={{ flexGrow: 1,   }} >
      <Grid
      justifyContent='center' alignItems='center' 
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}

      >
        {favorites.favorites.map((favorite) => (
          <li style={{ color: "red" }} className="item" key={favorite.id}>
            {favorite.name}
          </li>
        ))}

        {/* <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        /> */}
        {filteredUsers.map((character) => (
          <Grid item xs={2} sm={4} md={4} key={character.id} >
            <Card sx={{ maxWidth: 345 }} >
              <img height="194" src={character.image} alt={character.name} />
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species:{character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {character.type}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    // <div className="Characters">

    //     // <div key={character.id}>
    //     //   <h2 style={{ color: "blue" }}>{character.name}</h2>
    //     //   <button type="button" onClick={() => handleClick(character)}>
    //     //     {" "}
    //     //     Agregar a favoritos
    //     //   </button>
    //     // </div>
    //   ))}
    // </div>
  );
};

export default Characters;
