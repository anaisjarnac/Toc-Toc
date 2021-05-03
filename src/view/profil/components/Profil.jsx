import React from "react";
import Favoris from "./Favoris";
import MyProfil from "./Myprofil";
import ProfilReviewList from "./ProfilReviewList";
import MesBiens from "./MesBiens";

function Profil(props) {
  return (
    <div>
      <MyProfil />

      <ProfilReviewList />

      <Favoris />

      <MesBiens />
    </div>
  );
}

export default Profil;
