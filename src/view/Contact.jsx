import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      component={Link}
      to="/"
    >
      {"Copyright © "}
      Toc Toc
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
    border: "solid #FFB6A0 2px",
    borderRadius: "40px",
    boxShadow: "5px 5px 5px #FFB6A0",
    padding: "40px",
    backgroundColor: "#FFECC7",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#DA7070",
    color: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#DA7070",
    color: "black",
    fontFamily: "'Comfortaa', cursive",
    "&:hover": {
      background: "#FFB6A0",
      fontSize: "15px",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
  iconlock: {
    color: "white",
  },
  connexion: {
    fontFamily: "'Comfortaa', cursive",
    margin: "20px",
  },
  input: {
    backgroundColor: "white",
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

  const [open, setOpen] = React.useState();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactSupportIcon className={classes.iconlock} />
        </Avatar>
        <Typography component="h1" variant="h6" className={classes.connexion}>
          CONTACTEZ-NOUS
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
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
                className={classes.input}
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
                className={classes.input}
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
                className={classes.input}
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
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={() => setOpen(true)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Soumettre
          </Button>
          <Dialog
            open={open}
            // onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirmation d'envoi"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Merci de nous avoir contacté. Nous reviendrons vers vous dans
                des délais raisonnables mais plus rapide que la poste.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClick} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
