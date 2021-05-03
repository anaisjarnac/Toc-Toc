import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import UserContext from "../../context/user";

function Copyright() {
  return (
    <Typography
      align="center"
      variant="body2"
      to="/"
      component={Link}
      color="textSecondary"
    >
      {"Copyright © "}
      TocToc
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
    border: "solid #C6DADA 2px",
    borderRadius: "40px",
    boxShadow: "5px 5px 5px #8CB0BC",
    padding: "40px",
    backgroundColor: "#C6DADA",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FADDB6",
    color: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FADDB6",
    color: "black",
  },
  theback: {
    backgroundColor: "white",
  },
}));

export default function Connexion() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { connectedUser, setConnectedUser } = useContext(UserContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const userId = {
      email: email,
      password: password,
    };
    try {
      const token = await axios.post(
        "http://toctoc-api.herokuapp.com/users/login",
        userId
      );

      console.log(token.data);
      localStorage.setItem("userToken", token.data.access_token);

      const config = {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      };

      const userProfile = await axios.get(
        "http://toctoc-api.herokuapp.com/users/profile",
        config
      );

      setConnectedUser(userProfile.data);

      history.push("/profil");
    } catch (e) {
      // ici afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            C'est parti
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                to="/"
                component={Link}
                variant="body2"
                color="textPrimary"
                style={{ textDecoration: "none" }}
              >
                Mot de passe oublié?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                to="/inscription"
                component={Link}
                color="textPrimary"
                style={{ textDecoration: "none" }}
                variant="body2"
              >
                Pas encore de compte?
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
