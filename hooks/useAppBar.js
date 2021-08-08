import { IconButton } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import { createContext, Fragment, useContext, useState } from "react";

const AppbarContext = createContext({});

export default function AppbarProvider({ children = Fragment }) {
  const [open, setOpen] = useState(false);

  const handleAppbar = () => setOpen(!open);

  return (
    <AppbarContext.Provider value={{ open, handleAppbar }}>
      {children}
    </AppbarContext.Provider>
  );
}

export const useAppBar = () => {
  const appbar = useContext(AppbarContext);

  return appbar;
};

export const DrawerButton = () => {
  const appbar = useAppBar();
  return (
    <IconButton onClick={appbar.handleAppbar}>
      <MenuRounded  />
    </IconButton>
  );
};
