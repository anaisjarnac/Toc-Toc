import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

export default function Checkboxes({ label }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      }
      label={label}
    />
  );
}
