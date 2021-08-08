import Img from "next/image";
import { Divider } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Box, Container, TextField, makeStyles } from "@material-ui/core";
import { Fragment, useState } from "react";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  photo: {
    borderRadius: "0px 200px 200px 0px ",
    filter: "BRIGHTNESS(.5)",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh + 100px)",
    },
  },
  loginContent: {
    paddingTop: "50px",
    position: "relative",

    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      background: "#FFFFFF",
    },
  },
}));

export default function Login() {
  const classes = useStyle();
  const [view, setView] = useState(false);
  return (
    <Fragment>
      <Grid container alignItems="center" style={{ height: "100vh" }} a>
        <Grid item xs={12} sm={8}>
          <div
            style={{
              borderRadius: "0px 200px 200px 0px ",
              boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.3)",
              position: "absolute",
              height: "100vh",
              width: "100% ",
              top: 0,
              right: "40vw",
            }}
          >
            <Img
              className={classes.photo}
              src="/img/Jardines_ESIME_Azcapotzalco.jpg"
              layout="fill"
              objectFit="cover"
              alt="Esmie logo"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            className={`${classes.loginContent} animate__animated animate__fadeIn`}
          >
            <div style={{ textAlign: "center", paddingTop: "80px" }}>
              <Img src="/LogoEsime.png" width={150} height={150} />
            </div>
            <Container maxWidth="xs">
              <FormControl fullWidth margin="normal">
                <TextField
                  required
                  type="email"
                  label="Correo electronico"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
                <br />
                <TextField
                  required
                  type={view ? "password" : "text"}
                  label="Contraseña"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setView(!view)}>
                        {view ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                />
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  disableElevation
                >
                  Ingresar
                </Button>
              </FormControl>
            </Container>
            <br />
            <Divider />
            <Container maxWidth="xs">
              <Box my={4}>
                <FormControl fullWidth margin="normal">
                  <Button
                    variant="outlined"
                    startIcon={
                      <Img src="/svg/google.svg" height={20} width={20} />
                    }
                  >
                    Ingresar con cuenta google
                  </Button>
                  <br />
                  <Button
                    variant="outlined"
                    startIcon={
                      <Img src="/svg/facebook.png" height={20} width={20} />
                    }
                  >
                    Ingresar con cuenta facebook
                  </Button>
                </FormControl>
              </Box>
            </Container>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
