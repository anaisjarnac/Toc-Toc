import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
//import { ConfirmationNumberOutlined } from "@material-ui/icons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Toc Toc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [userComment, setUserComment] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleTextFieldChange = (e) => {
    setUserComment({ ...userComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // constInformation ={
    //   firstName:,
    //   lastName:,
    //   email:,
    //   message:,
    // };
    console.log(userComment);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactSupportIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
          CONTACTEZ-NOUS
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name={"firstName"}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                autoFocus
                onChange={handleTextFieldChange}
                value={userComment.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nom"
                name={"lastName"}
                autoComplete="lname"
                onChange={handleTextFieldChange}
                value={userComment.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name={"email"}
                autoComplete="email"
                onChange={handleTextFieldChange}
                value={userComment.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-textarea"
                required
                label="Commentaires"
                multiline
                variant="outlined"
                onChange={handleTextFieldChange}
                value={userComment.message}
                name={"message"}
                rows={4}
                rowsMax={7}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Soumettre
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
