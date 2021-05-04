import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import UserContext from "../../../context/user";
import ImagesProfil from "./ImagesProfil";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#F6C179",
    margin: "100px 300px",
    padding: "50px",
    borderRadius: "30px",
    marginBottom: "270px",
    boxShadow: "22px 22px 4px 2px #FFF2D9",
  },
  image: {
    height: 200,
    width: 200,
  },

  name: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Lato, sans-serif, Black italic",
  },
  containerprofil: {
    display: "flex",
  },
}));

function Myprofil(props) {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);

  const [profilImg, setProfilImg] = React.useState("");

  const handleUploadImage = (imageUrl) => {
    setProfilImg(imageUrl);
    console.log(profilImg);
  };

  return (
    <div className={classes.container}>
      <div className={classes.name}>
        <h1>{connectedUser.firstName}</h1>
        <h2>{connectedUser.lastName}</h2>
        <p>{connectedUser.email}</p>
      </div>
      <div className={classes.containerprofil}>
        <div>
          <Avatar className={classes.image} alt="Ginette" src={profilImg} />
        </div>
        <div>
          <ImagesProfil onUpload={handleUploadImage} />
        </div>
      </div>
    </div>
  );
}

export default Myprofil;
