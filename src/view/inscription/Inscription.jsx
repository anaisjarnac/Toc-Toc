import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

function Copyright() {
  return (
    <Typography
      to="/"
      component={Link}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      TocToc {new Date().getFullYear()}
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
    border: "solid #F6C178 2px",
    borderRadius: "40px",
    boxShadow: "5px 5px 5px #F6C178",
    padding: "40px",
    backgroundColor: "#FFECC7",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FF865A",
    color: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FF865A",
    color: "black",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "#F6C178",
      fontSize: "15px",
    },
  },
  theback: {
    backgroundColor: "white",
  },
  iconlock: {
    color: "white",
  },
  connexion: {
    fontFamily: "'Comfortaa', cursive",
    margin: "20px",
  },
  icon1: {
    color: "#FF865A",
  },
  input: {
    backgroundColor: "white",
  },
}));

export default function Inscription() {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = async () => {
    const userInscription = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      plainPassword: password,
    };
    const user = await axios.post(
      "http://toctoc-api.herokuapp.com/users",
      userInscription
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.iconlock} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.connexion}>
          S'INSCRIRE
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.theback}
                value={firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.theback}
                value={lastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.theback}
                value={email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon className={classes.icon1} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.theback}
                value={password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenOutlinedIcon className={classes.icon1} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            to="/"
            component={Link}
            onClick={handleClick}
          >
            S'enregistrer
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography
                to="/connexion"
                component={Link}
                color="textPrimary"
                style={{ textDecoration: "none" }}
                variant="body2"
              >
                Déjà un compte? Se connecter ici.
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
