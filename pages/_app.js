import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppbarProvider from "../hooks/useAppBar";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#016936",
    },
    secondary: {
      main: "#2b2f30",
    },
    text: {
      primary: "#2b2f30",
      hint: "#FFFFFF",
    },
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "15px",
        textTransform: "none",
        fontWeight: "bold",
      },
      contained: {
        background: "linear-gradient(to right,  #218956, #016936)",
      },
    },
	MuiInputBase:{
		root:{
			marginBottom: "20px",
		}
	},
    MuiOutlinedInput: {
      root: {
        
        borderRadius: "15px",
        padding: "0px 15px",
      },
    },
  },
});

function Home(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Esime directory</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <AppbarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppbarProvider>
    </Fragment>
  );
}

Home.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Home;
