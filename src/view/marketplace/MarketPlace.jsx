import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import FlatCardList from "../../common/components/FlatCardList";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function MarketPlace() {
  const classes = useStyles();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    postForm({});
  }, []);

  const postForm = (form) => {
    const token = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let criteria = form;

    if (criteria?.type?.length) {
      criteria = {
        ...criteria,
        type: [criteria.type],
      };
    } else {
      delete criteria.type;
    }
    if (criteria.price) {
      criteria = {
        ...criteria,
        price: { min: criteria.price[0], max: criteria.price[1] },
      };
    }
    if (criteria.area) {
      criteria = {
        ...criteria,
        area: { min: criteria.area[0], max: criteria.area[1] },
      };
    }
    axios
      .post("https://toctoc-api.herokuapp.com/flat/search", criteria, config)
      .then((res) => {
        setCards(res.data[0].data);
      });
  };

  return (
    <div className={classes.root}>
      <div>
        <Filter postForm={postForm} />
      </div>

      <Container>
        <div classeName={classes.flatCardList}>
          <FlatCardList cards={cards} />
        </div>
      </Container>
    </div>
  );
}

export default MarketPlace;
