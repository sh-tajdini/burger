import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  //change object which is comming from burger builder to array
  const transformedIngredients = Object.keys(props.ingredients) // salad ,bacon , cheese
    //dar inja igkey ke az bala miad hamoon salad o chizo o gheyre ast ke felan tedad nadarad

    .map((igKey) => {
      return [...Array(props.ingredients[igKey])] //[,]

        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    });
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
