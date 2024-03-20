import { CSSObject, Theme } from "@mui/material";

export const openedMixin = (theme: Theme): CSSObject => ({
    width: 340,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });