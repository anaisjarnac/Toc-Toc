import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectOption() {
  const classes = useStyles();
  const [userSelect, setUserSelect] = React.useState("");
  const [userSelectToo, setUserSelectToo] = React.useState("");
  console.log(userSelect);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Tu es</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          onChange={(e) => setUserSelect(e.target.value)}
        >
          <option aria-label="None" value="" />
          <optgroup>
            <option value={"locataire"}>Locataire</option>
            <option value={"proprietaire"}>Propriétaire</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Mais aussi</InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          onChange={(e) => setUserSelectToo(e.target.value)}
        >
          <MenuItem value="">
            <em>Rien</em>
          </MenuItem>
          <ListSubheader></ListSubheader>
          <MenuItem value={"locataire"}>Locataire</MenuItem>
          <MenuItem value={"proprietaire"}>Propriétaire</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
