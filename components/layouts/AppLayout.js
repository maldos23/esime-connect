import {
  AppBar,
  Container,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Img from "next/image";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {
  MenuRounded,
  Notifications,
  NotificationsRounded,
  SearchOutlined,
} from "@material-ui/icons";
import { Fragment } from "react";
import { DrawerContent } from ".";
import { DrawerButton, useAppBar } from "../../hooks/useAppBar";
import { Icon } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "calc(100vh - 67px)",
    width: "100%",
  },
  drawer: {
    width: "220px",
    background: theme.palette.background.paper,
    [theme.breakpoints.up("md")]: {
      borderRight: "1px solid #DDDDDD",
    },
  },
  appContent: {
    width: "calc(100% - 220px)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  appbar: {
    background: theme.palette.background.paper,
    borderBottom: "1px solid #DDDDDD",
  },
  inputPaper: {
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    background: "#DDDDDD",
    maxWidth: "200px",
  },
}));

export default function Main({ children = Fragment }) {
  const classes = useStyle();
  const appbar = useAppBar();
  return (
    <>
      <AppBar elevation={0} position="sticky" className={classes.appbar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Hidden mdUp>
            <DrawerButton />
          </Hidden>
          <Hidden smDown>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Img src="/LogoEsime.png" width={50} height={50} />
              <div style={{ margin: "10px" }} />
              <Typography color="primary" variant="h5">
                <b>Esime connect</b>
              </Typography>
            </div>
          </Hidden>
          <Paper elevation={0} className={classes.inputPaper}>
            <Icon>
              <SearchOutlined />
            </Icon>
            <InputBase style={{ margin: "0px 15px" }} placeholder="Buscar" />
          </Paper>
          <div>
            <IconButton>
              <NotificationsRounded />
            </IconButton>
            <IconButton>
              <Avatar>G</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Hidden smDown>
          <div className={classes.drawer}>
            <DrawerContent />
          </div>
        </Hidden>
        <Hidden mdUp>
          <SwipeableDrawer
            PaperProps={{ className: classes.drawer }}
            open={appbar.open}
            onClose={appbar.handleAppbar}
            onOpen={appbar.handleAppbar}
          >
            <DrawerContent />
          </SwipeableDrawer>
        </Hidden>

        <div className={classes.appContent}>
          <Container>
            <Box my={5}>{children}</Box>
          </Container>
        </div>
      </div>
    </>
  );
}
