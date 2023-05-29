import { createTheme } from "@mui/material/styles";

// Tema claro
const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#001150", // Cambia el color principal según tus preferencias
      
    },
    secondary: {
      main: "#fff",
    },
    background: {
        default: '#fff', // Cambia el color de fondo predeterminado según tus preferencias
      },
 
    // Agrega aquí más personalizaciones de colores si es necesario
  },
});

// Tema oscuro
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#29b6f6", // Cambia el color principal según tus preferencias
    },
    secondary: {
      main: "#fff",
    },
    background: {
        default: '#383838', // Cambia el color de fondo predeterminado según tus preferencias
      },
 
  },
});

export { lightTheme, darkTheme };
