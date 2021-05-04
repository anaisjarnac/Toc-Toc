import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import palette from "./palette";

const theme = responsiveFontSizes(
    createMuiTheme({
            palette: palette,
    })
);


export default theme;