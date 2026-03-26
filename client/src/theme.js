import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f7a74",
      light: "#3c9a93",
      dark: "#145e58",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f4a261",
      light: "#f7b87f",
      dark: "#dd8540",
      contrastText: "#1b2a24",
    },
    error: {
      main: "#e76f51",
    },
    background: {
      default: "#f7f1e7",
      paper: "#ffffff",
    },
    text: {
      primary: "#1b2a24",
      secondary: "#4b5b55",
    },
    divider: "rgba(27, 42, 36, 0.12)",
  },
  typography: {
    fontFamily: "'Space Grotesk', 'Sora', 'Avenir Next', sans-serif",
    h1: {
      fontFamily: "'Fraunces', 'DM Serif Display', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Fraunces', 'DM Serif Display', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "'Fraunces', 'DM Serif Display', serif",
      fontWeight: 650,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "'Fraunces', 'DM Serif Display', serif",
      fontWeight: 650,
    },
    h5: {
      fontWeight: 650,
    },
    h6: {
      fontWeight: 650,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ":root": {
          "--bg-1": "#f7f1e7",
          "--bg-2": "#e7f5f2",
          "--bg-3": "#fff5e8",
          "--accent-1": "#1f7a74",
          "--accent-2": "#f4a261",
          "--accent-3": "#e76f51",
          "--card-surface": "rgba(255, 255, 255, 0.86)",
          "--card-border": "rgba(27, 42, 36, 0.12)",
          "--shadow-soft": "0 12px 32px rgba(27, 42, 36, 0.12)",
          "--shadow-lift": "0 20px 45px rgba(27, 42, 36, 0.18)",
        },
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          minHeight: "100vh",
          color: theme.palette.text.primary,
          backgroundColor: "var(--bg-1)",
          backgroundImage:
            "radial-gradient(1200px 900px at 5% -10%, rgba(244, 162, 97, 0.35), transparent 60%), radial-gradient(900px 700px at 90% -20%, rgba(31, 122, 116, 0.22), transparent 55%), linear-gradient(140deg, var(--bg-1) 0%, var(--bg-2) 45%, var(--bg-3) 100%)",
          backgroundAttachment: "scroll",
        },
        "#root": {
          minHeight: "100vh",
          paddingBottom: theme.spacing(6),
          animation: "pageIn 600ms ease",
        },
        a: {
          color: theme.palette.primary.main,
          textDecorationColor: alpha(theme.palette.primary.main, 0.4),
          textUnderlineOffset: "4px",
          transition: "color 0.2s ease, text-decoration-color 0.2s ease",
        },
        "a:hover": {
          color: theme.palette.primary.dark,
          textDecorationColor: alpha(theme.palette.primary.dark, 0.6),
        },
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: alpha(theme.palette.primary.main, 0.35),
          borderRadius: "999px",
          border: "2px solid rgba(255, 255, 255, 0.6)",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "rgba(255, 255, 255, 0.35)",
        },
        "@keyframes pageIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes cardRise": {
          "0%": {
            opacity: 0,
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }),
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingTop: "24px",
          paddingBottom: "24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          padding: 16,
          borderWidth: "1px",
          borderColor: "var(--card-border)",
          borderRadius: 20,
          backgroundColor: "var(--card-surface)",
          backdropFilter: "blur(12px)",
          boxShadow: "var(--shadow-soft)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "var(--shadow-lift)",
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: "inherit",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 8,
          paddingBottom: 8,
          transition: "transform 0.15s ease, box-shadow 0.2s ease",
        },
        contained: {
          background:
            "linear-gradient(135deg, #1f7a74 0%, #2a9d8f 60%, #3fb7a8 100%)",
          boxShadow: "0 12px 24px rgba(31, 122, 116, 0.28)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 16px 30px rgba(31, 122, 116, 0.35)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          borderColor: alpha("#1f7a74", 0.35),
          backgroundColor: alpha("#1f7a74", 0.06),
          "&:hover": {
            borderColor: alpha("#1f7a74", 0.7),
            backgroundColor: alpha("#1f7a74", 0.12),
            transform: "translateY(-1px)",
          },
        },
        text: {
          paddingLeft: 12,
          paddingRight: 12,
          "&:hover": {
            backgroundColor: alpha("#1f7a74", 0.08),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          transition: "background-color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            backgroundColor: alpha("#1f7a74", 0.08),
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: "rgba(255, 255, 255, 0.82)",
          transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha("#1f7a74", 0.45),
          },
          "&.Mui-focused": {
            boxShadow: "0 0 0 4px rgba(31, 122, 116, 0.18)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1f7a74",
          },
        },
        notchedOutline: {
          borderColor: alpha("#1f7a74", 0.2),
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#4b5b55",
          "&.Mui-focused": {
            color: "#1f7a74",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 3,
          background:
            "linear-gradient(90deg, #1f7a74 0%, #3fb7a8 100%)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          minHeight: 48,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha("#1f7a74", 0.12),
        },
      },
    },
  },
});

export default theme;
