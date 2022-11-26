const theme = {
  html: {
    display: "flex",
    padding: 0,
    margin: 0,
  },
  body: {
    display: "flex",
    padding: 0,
    margin: 0,
  },
  color: {
    background: "#141827",
    primary: {
      main: "#fffae3",
      contrastText: "#c1d9d0",
    },
    secundary: {
      main: "#736681",
      contrastText: "#62455b",
    },
  },

  border: {
    radius: "15px",
    style: "2px solid #736681",
  },

  font: {
    small: "0.5rem",
    default: "1rem",
    big: "2rem",
    bigger: "3rem",
  },

  light: {
    id: "T_001",
    name: "Light",
    colors: {
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
    },
    font: "Tinos",
  },
  seaWave: {
    id: "T_007",
    name: "Sea Wave",
    colors: {
      body: "#9be7ff",
      text: "#0d47a1",
      button: {
        text: "#ffffff",
        background: "#0d47a1",
      },
      link: {
        text: "#0d47a1",
        opacity: 0.8,
      },
    },
    font: "Ubuntu",
  },
};

export default theme;
